import multer from 'multer';
import { randomUUID } from 'node:crypto';
import { mkdirSync } from 'node:fs';
import { uploadDir, maxFileSize } from '../config.js';

const extensions = {
  'image/jpeg': '.jpg',
  'image/jpg': '.jpg',
  'image/png': '.png',
  'image/webp': '.webp',
  'image/gif': '.gif',
  'image/svg+xml': '.svg',
  'application/pdf': '.pdf',
};

export function createUpload({ pdf = false, svg = false, limit = maxFileSize } = {}) {
  mkdirSync(uploadDir, { recursive: true });
  return multer({
    storage: multer.diskStorage({
      destination: (_req, _file, cb) => cb(null, uploadDir),
      filename: (_req, file, cb) => cb(null, `${randomUUID()}${extensions[file.mimetype]}`),
    }),
    limits: { fileSize: limit, files: 25, fields: 100 },
    fileFilter: (_req, file, cb) => {
      const allowed =
        extensions[file.mimetype] &&
        (pdf || file.mimetype !== 'application/pdf') &&
        (svg || file.mimetype !== 'image/svg+xml');
      if (allowed) return cb(null, true);
      const error = new Error(
        `Unsupported file type. Upload a JPEG, PNG, WebP or GIF image${pdf ? ', or a PDF document' : ''}.`,
      );
      error.status = 400;
      cb(error);
    },
  });
}
