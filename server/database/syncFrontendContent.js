import { copyFileSync, existsSync, mkdirSync } from 'fs';
import { dirname, extname, join } from 'path';
import { fileURLToPath } from 'url';
import { companies } from '../../src/data/companies.ts';
import { companyLogos } from '../../src/data/companyLogos.ts';
import { camyProducts } from '../../src/data/siteContent.ts';
import db, { initDatabase } from './init.js';
import { initNewsDatabase } from './initNews.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..', '..');
const uploadDir = join(projectRoot, 'server', 'uploads');

const productAssets = {
  'Motorcycle Helmets': 'camy-motorcycle-helmet.png',
  'Water Filters': 'camy-water-filter.png',
  'Mixer Grinders': null,
  'Non-Stick Cookware': 'camy-non-stick-cookware.png',
  'Air Conditioners': 'camy-air-conditioners.png',
  Fans: 'camy-fan.png',
  TVs: 'camy-tv.png',
  'Wall Clocks': 'camy-wall-clock.png',
  'Electric Kettles': 'camy-electric-kettles.png',
  'Gas Cookers': 'camy-gas-cooker.png',
  Refrigerators: 'camy-double-door-refrigerator.jpeg',
  'Mini Refrigerators': 'camy-mini-refrigerator.jpeg',
  'Pressure Cookers': 'camy-pressure-cooker.png',
};

const categoryDefinitions = [
  {
    name: 'Safety Equipment',
    slug: 'safety-equipment',
    description: 'Protective products including SLS-certified motorcycle helmets.',
  },
  {
    name: 'Food & Water Preparation',
    slug: 'food-water-preparation',
    description: 'Water filtration and everyday food preparation appliances.',
  },
  {
    name: 'Cookware & Kitchen',
    slug: 'cookware-kitchen',
    description: 'Cookware, pressure cookers, kettles and gas cookers.',
  },
  {
    name: 'Cooling & Air Care',
    slug: 'cooling-air-care',
    description: 'Air conditioners and fans for homes and businesses.',
  },
  {
    name: 'Home Electronics',
    slug: 'home-electronics',
    description: 'Televisions, clocks and practical household electronics.',
  },
  {
    name: 'Refrigeration',
    slug: 'refrigeration',
    description: 'Full-size and compact Camy refrigeration products.',
  },
];

const productCategory = {
  'Motorcycle Helmets': 'safety-equipment',
  'Water Filters': 'food-water-preparation',
  'Mixer Grinders': 'food-water-preparation',
  'Non-Stick Cookware': 'cookware-kitchen',
  'Electric Kettles': 'cookware-kitchen',
  'Gas Cookers': 'cookware-kitchen',
  'Pressure Cookers': 'cookware-kitchen',
  'Air Conditioners': 'cooling-air-care',
  Fans: 'cooling-air-care',
  TVs: 'home-electronics',
  'Wall Clocks': 'home-electronics',
  Refrigerators: 'refrigeration',
  'Mini Refrigerators': 'refrigeration',
};

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function copyToUploads(sourcePath, destinationBase) {
  if (!sourcePath || !existsSync(sourcePath)) return null;
  mkdirSync(uploadDir, { recursive: true });
  const filename = `frontend-${destinationBase}${extname(sourcePath)}`;
  const destination = join(uploadDir, filename);
  if (!existsSync(destination)) copyFileSync(sourcePath, destination);
  return `/uploads/${filename}`;
}

function syncCompanies() {
  const insert = db.prepare(`
    INSERT INTO companies (
      id, name, shortName, description, fullDescription, tagline, industry,
      established, website, location, features, awards, imageUrl, phone, email, sequence
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    ON CONFLICT(id) DO NOTHING
  `);

  let inserted = 0;
  companies.forEach((company, index) => {
    const logoRelativePath = companyLogos[company.id]?.replace(/^\//, '');
    const logoPath = logoRelativePath ? join(projectRoot, 'public', logoRelativePath) : null;
    const logoUrl = copyToUploads(logoPath, `company-${company.id}`);
    const result = insert.run(
      company.id,
      company.name,
      company.shortName,
      company.description,
      company.fullDescription,
      company.tagline,
      company.industry,
      company.established || null,
      company.website || null,
      company.location || null,
      JSON.stringify(company.features),
      JSON.stringify(company.awards || []),
      logoUrl,
      company.phone || null,
      company.email || null,
      index + 1,
    );
    inserted += result.changes;
  });
  return inserted;
}

function syncCategories() {
  const insert = db.prepare(`
    INSERT INTO categories (name, slug, description, isActive)
    VALUES (?, ?, ?, 1)
    ON CONFLICT(slug) DO NOTHING
  `);
  let inserted = 0;
  categoryDefinitions.forEach((category) => {
    inserted += insert.run(category.name, category.slug, category.description).changes;
  });
  return inserted;
}

function syncProducts() {
  const categoryIds = new Map(
    db
      .prepare('SELECT id, slug FROM categories')
      .all()
      .map((row) => [row.slug, row.id]),
  );
  const insert = db.prepare(`
    INSERT INTO products (
      title, slug, shortDescription, longDescription, imageUrl, price,
      wholesalePrice, categoryId, isVariable, isActive
    ) VALUES (?, ?, ?, ?, ?, 0, 0, ?, 0, 1)
    ON CONFLICT(slug) DO NOTHING
  `);

  let inserted = 0;
  camyProducts.forEach((product) => {
    const asset = productAssets[product.name];
    const sourcePath = asset
      ? join(projectRoot, 'src', 'assets', 'products', asset)
      : join(projectRoot, 'src', 'assets', 'hero-manufacturing.jpg');
    const imageUrl = copyToUploads(sourcePath, `product-${slugify(product.name)}`);
    const shortDescription = `${product.note} · Manufactured by ${product.madeBy}`;
    const longDescription = `${product.name} from the Camy range, manufactured in Sri Lanka by ${product.madeBy}.`;
    const categoryId = categoryIds.get(productCategory[product.name]) || null;
    inserted += insert.run(
      product.name,
      slugify(product.name),
      shortDescription,
      longDescription,
      imageUrl,
      categoryId,
    ).changes;
  });
  return inserted;
}

function syncBrands() {
  const existingNames = new Set(
    db
      .prepare('SELECT name FROM brands')
      .all()
      .map((brand) => brand.name),
  );
  const insert = db.prepare(`
    INSERT INTO brands (name, logoUrl, website, displayOrder, isActive)
    VALUES (?, ?, ?, ?, 1)
  `);
  let inserted = 0;
  companies.forEach((company, index) => {
    if (existingNames.has(company.shortName)) return;
    const logoRelativePath = companyLogos[company.id]?.replace(/^\//, '');
    const logoPath = logoRelativePath ? join(projectRoot, 'public', logoRelativePath) : null;
    const logoUrl = copyToUploads(logoPath, `brand-${company.id}`);
    if (!logoUrl) return;
    inserted += insert.run(company.shortName, logoUrl, company.website || null, index + 1).changes;
  });
  return inserted;
}

initDatabase();
initNewsDatabase();

const syncAll = db.transaction(() => ({
  companies: syncCompanies(),
  categories: syncCategories(),
  products: syncProducts(),
  brands: syncBrands(),
}));

const inserted = syncAll();
const totals = {
  companies: db.prepare('SELECT COUNT(*) AS count FROM companies').get().count,
  categories: db.prepare('SELECT COUNT(*) AS count FROM categories').get().count,
  products: db.prepare('SELECT COUNT(*) AS count FROM products').get().count,
  brands: db.prepare('SELECT COUNT(*) AS count FROM brands').get().count,
};

console.log('Frontend content synchronization complete.');
console.table({ inserted, totals });
