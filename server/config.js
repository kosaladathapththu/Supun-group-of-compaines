import 'dotenv/config';
import { randomBytes } from 'node:crypto';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

export const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
export const isProduction = process.env.NODE_ENV === 'production';
const configuredSecret = process.env.JWT_SECRET?.trim();
if (
  isProduction &&
  (!configuredSecret ||
    configuredSecret.length < 32 ||
    /change.this|your.secret/i.test(configuredSecret))
) {
  throw new Error(
    'Set JWT_SECRET to a unique random secret of at least 32 characters before starting production.',
  );
}
export const jwtSecret = configuredSecret || randomBytes(48).toString('hex');
export const databasePath = resolve(
  projectRoot,
  process.env.DATABASE_PATH || 'server/database.sqlite',
);
export const uploadDir = resolve(projectRoot, process.env.UPLOAD_DIR || 'server/uploads');
export const maxFileSize = Number(process.env.MAX_FILE_SIZE) || 10 * 1024 * 1024;
export const allowedOrigins = (
  process.env.CORS_ORIGIN ||
  'https://supuncompanies.com,https://www.supuncompanies.com,http://localhost:8080,http://127.0.0.1:8080'
)
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);
