import db from "./init.js";

export function initNewsDatabase() {
  db.exec(`
    CREATE TABLE IF NOT EXISTS news (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      slug TEXT NOT NULL UNIQUE,
      summary TEXT NOT NULL,
      content TEXT NOT NULL,
      category TEXT NOT NULL DEFAULT 'Corporate',
      featuredImage TEXT,
      author TEXT,
      publishedDate TEXT,
      status TEXT NOT NULL DEFAULT 'draft',
      seoTitle TEXT,
      seoDescription TEXT,
      createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
      updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  db.exec(`
    CREATE INDEX IF NOT EXISTS idx_news_status_published
    ON news(status, publishedDate DESC)
  `);
}

export default initNewsDatabase;
