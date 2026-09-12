import { mkdir, readdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";

const SOURCE_SITE = "https://supuncompanies.com";
const OUTPUT_DIR = path.resolve("public/logos");
const MAPPING_FILE = path.resolve("src/data/companyLogos.ts");

const targets = [
  { id: "supun-traders", companyIds: ["supun-traders"], aliases: ["supun traders", "supun traders distributors"] },
  { id: "supun-super-center", companyIds: ["supun-super-center", "supun-super-centre"], aliases: ["supun super center", "supun super centre"] },
  { id: "supun-arcade-residency", companyIds: ["supun-arcade-residency", "supun-arcade"], aliases: ["supun arcade residency", "supun arcade"] },
  { id: "area-56", companyIds: ["area-56", "area56"], aliases: ["area 56"] },
  { id: "supun-aerosoft", companyIds: ["supun-aerosoft", "aerosoft"], aliases: ["supun aerosoft", "ymac smart", "aerosoft"] },
  { id: "aerostar-home-appliances", companyIds: ["aerostar-home-appliances", "aero-star", "aerostar"], aliases: ["aerostar home appliances", "aero star", "aerostar"] },
  { id: "camy-smart", companyIds: ["camy-smart"], aliases: ["camy smart"] },
  { id: "rodsons", companyIds: ["rodsons"], aliases: ["rodsons"] },
  { id: "new-camy-smart", companyIds: ["new-camy-smart"], aliases: ["new camy smart"] },
  { id: "fuji-industries", companyIds: ["fuji-industries", "fuji"], aliases: ["fuji industries", "fuji"] },
  { id: "camy-global", companyIds: ["camy-global"], aliases: ["camy global"] },
];

const normalize = (value = "") => value.toLowerCase().replace(/\(pvt\)|private|limited|ltd|pvt|[^a-z0-9]+/g, " ").trim().replace(/\s+/g, " ");

const fetchJson = async (url) => {
  const response = await fetch(url, { headers: { Accept: "application/json", "User-Agent": "SupunGroupWebsiteV2LogoImporter/1.0" } });
  if (!response.ok) throw new Error(`${url} returned ${response.status}`);
  return response.json();
};

const absoluteUrl = (value) => {
  if (!value) return null;
  try { return new URL(value, SOURCE_SITE).toString(); } catch { return null; }
};

const findCompany = (companies, target) => {
  const exact = companies.find((company) => target.companyIds.includes(String(company.id || "").toLowerCase()));
  if (exact) return exact;
  const aliases = target.aliases.map(normalize);
  return companies.find((company) => {
    const values = [company.name, company.shortName, company.id].map((value) => normalize(String(value || "")));
    return aliases.some((alias) => values.some((value) => value === alias || value.includes(alias) || alias.includes(value)));
  });
};

const findBrand = (brands, target) => {
  const aliases = target.aliases.map(normalize);
  return brands.find((brand) => {
    const value = normalize(String(brand.name || ""));
    return aliases.some((alias) => value === alias || value.includes(alias) || alias.includes(value));
  });
};

const extensionFor = (contentType, url) => {
  const type = String(contentType || "").toLowerCase();
  if (type.includes("svg")) return "svg";
  if (type.includes("webp")) return "webp";
  if (type.includes("jpeg") || type.includes("jpg")) return "jpg";
  if (type.includes("png")) return "png";
  if (type.includes("gif")) return "gif";
  try {
    const ext = path.extname(new URL(url).pathname).slice(1).toLowerCase();
    if (["svg", "webp", "jpg", "jpeg", "png", "gif"].includes(ext)) return ext === "jpeg" ? "jpg" : ext;
  } catch {}
  return "png";
};

const downloadLogo = async (target, sourceUrl) => {
  const response = await fetch(sourceUrl, { headers: { "User-Agent": "SupunGroupWebsiteV2LogoImporter/1.0" }, redirect: "follow" });
  if (!response.ok) throw new Error(`${sourceUrl} returned ${response.status}`);
  const contentType = response.headers.get("content-type") || "";
  if (!contentType.startsWith("image/")) throw new Error(`${sourceUrl} is not an image (${contentType || "unknown content type"})`);
  const ext = extensionFor(contentType, sourceUrl);
  const fileName = `${target.id}.${ext}`;
  const bytes = Buffer.from(await response.arrayBuffer());
  await writeFile(path.join(OUTPUT_DIR, fileName), bytes);
  return `/logos/${fileName}`;
};

await mkdir(OUTPUT_DIR, { recursive: true });

for (const entry of await readdir(OUTPUT_DIR)) {
  if (targets.some((target) => entry.startsWith(`${target.id}.`))) {
    await rm(path.join(OUTPUT_DIR, entry), { force: true });
  }
}

let companies = [];
let brands = [];
try { companies = await fetchJson(`${SOURCE_SITE}/api/companies`); } catch (error) { console.warn(`Companies API: ${error.message}`); }
try { brands = await fetchJson(`${SOURCE_SITE}/api/brands`); } catch (error) { console.warn(`Brands API: ${error.message}`); }

if (!Array.isArray(companies)) companies = [];
if (!Array.isArray(brands)) brands = [];

console.log(`Current site returned ${companies.length} companies and ${brands.length} brands.`);

const mapping = {};
const manifest = [];

for (const target of targets) {
  const company = findCompany(companies, target);
  const brand = findBrand(brands, target);
  const candidates = [
    { kind: "company", value: company?.imageUrl },
    { kind: "brand", value: brand?.logoUrl },
  ].filter((candidate) => candidate.value);

  let imported = false;
  for (const candidate of candidates) {
    const sourceUrl = absoluteUrl(candidate.value);
    if (!sourceUrl) continue;
    try {
      mapping[target.id] = await downloadLogo(target, sourceUrl);
      manifest.push({ id: target.id, source: sourceUrl, sourceType: candidate.kind });
      console.log(`Imported ${target.id} from ${candidate.kind}: ${sourceUrl}`);
      imported = true;
      break;
    } catch (error) {
      console.warn(`Could not import ${target.id} from ${sourceUrl}: ${error.message}`);
    }
  }

  if (!imported) console.warn(`No current-site logo/image found for ${target.id}`);
}

const generated = `// AUTO-GENERATED by scripts/import-current-site-logos.mjs\n// Sources: the existing public supuncompanies.com company/brand APIs.\nexport const companyLogos: Record<string, string> = ${JSON.stringify(mapping, null, 2)};\n\nexport const getCompanyLogo = (companyId: string): string | undefined => companyLogos[companyId];\n`;
await writeFile(MAPPING_FILE, generated, "utf8");
await writeFile(path.join(OUTPUT_DIR, "source-manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`, "utf8");

console.log(`Imported ${Object.keys(mapping).length}/${targets.length} company logo assets.`);
if (Object.keys(mapping).length === 0) process.exitCode = 2;
