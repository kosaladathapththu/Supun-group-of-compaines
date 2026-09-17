import express from "express";
import multer from "multer";
import { fileURLToPath } from "url";
import { dirname, extname, join } from "path";
import { existsSync, mkdirSync } from "fs";
import db from "../database/init.js";
import { authenticateToken, isAdmin } from "../middleware/auth.js";

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const uploadDir = join(__dirname, "..", "uploads");
if (!existsSync(uploadDir)) mkdirSync(uploadDir, { recursive: true });

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, uploadDir),
  filename: (_req, file, cb) => {
    const suffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    cb(null, `${suffix}${extname(file.originalname).toLowerCase()}`);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    const allowed = ["image/jpeg", "image/jpg", "image/png", "image/webp", "image/gif"];
    if (allowed.includes(file.mimetype)) cb(null, true);
    else cb(new Error("Only JPEG, PNG, WebP or GIF images are allowed."));
  },
});

const slugify = (value = "") =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 160);

const normalizeStatus = (value) => (value === "published" ? "published" : "draft");
const nullIfEmpty = (value) => (typeof value === "string" && value.trim() ? value.trim() : null);

// Older admin forms saved browser-local Sri Lanka times without a timezone.
// New forms save UTC ISO strings. Interpret both correctly when deciding if an
// article is visible, without changing any existing publication dates.
const isPublishedNow = `
  status = 'published' AND (
    publishedDate IS NULL OR
    datetime(
      publishedDate,
      CASE
        WHEN publishedDate LIKE '%Z' OR substr(publishedDate, -6, 1) IN ('+', '-') THEN '+0 minutes'
        ELSE '-5 hours'
      END,
      CASE
        WHEN publishedDate LIKE '%Z' OR substr(publishedDate, -6, 1) IN ('+', '-') THEN '+0 minutes'
        ELSE '-30 minutes'
      END
    ) <= datetime('now')
  )
`;

function uniqueSlug(requested, excludeId = null) {
  const base = slugify(requested) || `news-${Date.now()}`;
  let slug = base;
  let count = 2;

  while (true) {
    const existing = excludeId
      ? db.prepare("SELECT id FROM news WHERE slug = ? AND id != ?").get(slug, excludeId)
      : db.prepare("SELECT id FROM news WHERE slug = ?").get(slug);
    if (!existing) return slug;
    slug = `${base}-${count++}`;
  }
}

router.get("/", (req, res) => {
  try {
    const category = nullIfEmpty(req.query.category);
    const baseSql = `
      SELECT * FROM news
      WHERE ${isPublishedNow}
    `;
    const rows = category
      ? db.prepare(`${baseSql} AND category = ? ORDER BY datetime(COALESCE(publishedDate, createdAt)) DESC, id DESC`).all(category)
      : db.prepare(`${baseSql} ORDER BY datetime(COALESCE(publishedDate, createdAt)) DESC, id DESC`).all();
    res.json(rows);
  } catch (error) {
    console.error("Get published news error:", error);
    res.status(500).json({ error: "Failed to fetch news" });
  }
});

router.get("/all", authenticateToken, isAdmin, (_req, res) => {
  try {
    const rows = db.prepare("SELECT * FROM news ORDER BY datetime(COALESCE(publishedDate, createdAt)) DESC, id DESC").all();
    res.json(rows);
  } catch (error) {
    console.error("Get all news error:", error);
    res.status(500).json({ error: "Failed to fetch news" });
  }
});

router.get("/admin/:id", authenticateToken, isAdmin, (req, res) => {
  try {
    const article = db.prepare("SELECT * FROM news WHERE id = ?").get(req.params.id);
    if (!article) return res.status(404).json({ error: "News article not found" });
    res.json(article);
  } catch (error) {
    console.error("Get admin news article error:", error);
    res.status(500).json({ error: "Failed to fetch news article" });
  }
});

router.get("/:slug", (req, res) => {
  try {
    const article = db
      .prepare(`
        SELECT * FROM news
        WHERE slug = ? AND ${isPublishedNow}
      `)
      .get(req.params.slug);
    if (!article) return res.status(404).json({ error: "News article not found" });
    res.json(article);
  } catch (error) {
    console.error("Get news article error:", error);
    res.status(500).json({ error: "Failed to fetch news article" });
  }
});

router.post("/", authenticateToken, isAdmin, upload.single("featuredImage"), (req, res) => {
  try {
    const { title, summary, content, category, author, publishedDate, status, seoTitle, seoDescription } = req.body;
    if (!title?.trim() || !summary?.trim() || !content?.trim()) {
      return res.status(400).json({ error: "Title, summary and content are required" });
    }

    const finalStatus = normalizeStatus(status);
    const finalPublishedDate = finalStatus === "published"
      ? nullIfEmpty(publishedDate) || new Date().toISOString()
      : nullIfEmpty(publishedDate);
    const slug = uniqueSlug(req.body.slug || title);
    const featuredImage = req.file ? `/uploads/${req.file.filename}` : null;

    const result = db.prepare(`
      INSERT INTO news (
        title, slug, summary, content, category, featuredImage, author,
        publishedDate, status, seoTitle, seoDescription
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).run(
      title.trim(), slug, summary.trim(), content.trim(), nullIfEmpty(category) || "Corporate",
      featuredImage, nullIfEmpty(author), finalPublishedDate, finalStatus,
      nullIfEmpty(seoTitle), nullIfEmpty(seoDescription)
    );

    res.status(201).json(db.prepare("SELECT * FROM news WHERE id = ?").get(result.lastInsertRowid));
  } catch (error) {
    console.error("Create news article error:", error);
    res.status(500).json({ error: "Failed to create news article" });
  }
});

router.put("/:id", authenticateToken, isAdmin, upload.single("featuredImage"), (req, res) => {
  try {
    const existing = db.prepare("SELECT * FROM news WHERE id = ?").get(req.params.id);
    if (!existing) return res.status(404).json({ error: "News article not found" });

    const title = req.body.title?.trim() || existing.title;
    const summary = req.body.summary?.trim() || existing.summary;
    const content = req.body.content?.trim() || existing.content;
    const finalStatus = normalizeStatus(req.body.status ?? existing.status);
    const slug = uniqueSlug(req.body.slug || title, Number(req.params.id));
    const featuredImage = req.file ? `/uploads/${req.file.filename}` : existing.featuredImage;
    const finalPublishedDate = finalStatus === "published"
      ? nullIfEmpty(req.body.publishedDate) || existing.publishedDate || new Date().toISOString()
      : nullIfEmpty(req.body.publishedDate);

    db.prepare(`
      UPDATE news SET
        title = ?, slug = ?, summary = ?, content = ?, category = ?, featuredImage = ?,
        author = ?, publishedDate = ?, status = ?, seoTitle = ?, seoDescription = ?,
        updatedAt = CURRENT_TIMESTAMP
      WHERE id = ?
    `).run(
      title, slug, summary, content, nullIfEmpty(req.body.category) || existing.category || "Corporate",
      featuredImage, nullIfEmpty(req.body.author), finalPublishedDate, finalStatus,
      nullIfEmpty(req.body.seoTitle), nullIfEmpty(req.body.seoDescription), req.params.id
    );

    res.json(db.prepare("SELECT * FROM news WHERE id = ?").get(req.params.id));
  } catch (error) {
    console.error("Update news article error:", error);
    res.status(500).json({ error: "Failed to update news article" });
  }
});

router.delete("/:id", authenticateToken, isAdmin, (req, res) => {
  try {
    const existing = db.prepare("SELECT id FROM news WHERE id = ?").get(req.params.id);
    if (!existing) return res.status(404).json({ error: "News article not found" });
    db.prepare("DELETE FROM news WHERE id = ?").run(req.params.id);
    res.json({ message: "News article deleted successfully" });
  } catch (error) {
    console.error("Delete news article error:", error);
    res.status(500).json({ error: "Failed to delete news article" });
  }
});

export default router;
