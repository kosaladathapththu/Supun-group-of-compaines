import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import companyRoutes from './routes/companies.js';
import authRoutes from './routes/auth.js';
import brandRoutes from './routes/brands.js';
import categoryRoutes from './routes/categories.js';
import productRoutes from './routes/products.js';
import newsRoutes from './routes/news.js';
import { initDatabase } from './database/init.js';
import { initNewsDatabase } from './database/initNews.js';
import { allowedOrigins, isProduction, projectRoot, uploadDir } from './config.js';
import { existsSync } from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

app.disable('x-powered-by');
if (process.env.TRUST_PROXY) app.set('trust proxy', process.env.TRUST_PROXY);
app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) return callback(null, true);
      const error = new Error('Origin is not allowed');
      error.status = 403;
      callback(error);
    },
  }),
);
app.use((_req, res, next) => {
  res.set('X-Content-Type-Options', 'nosniff');
  res.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  '/uploads',
  express.static(uploadDir, {
    setHeaders(res) {
      res.setHeader(
        'Content-Security-Policy',
        "default-src 'none'; style-src 'unsafe-inline'; sandbox",
      );
    },
  }),
);

initDatabase();
initNewsDatabase();

app.use('/api/auth', authRoutes);
app.use('/api/companies', companyRoutes);
app.use('/api/brands', brandRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/products', productRoutes);
app.use('/api/news', newsRoutes);

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

// Unknown API requests must stay JSON instead of falling through to the SPA.
app.use('/api', (_req, res) => res.status(404).json({ error: 'API endpoint not found' }));
if (isProduction && existsSync(join(projectRoot, 'dist', 'index.html'))) {
  app.use(express.static(join(projectRoot, 'dist')));
  app.use('/assets', (_req, res) => res.status(404).json({ error: 'Asset not found' }));
  app.get('/{*path}', (_req, res) => res.sendFile(join(projectRoot, 'dist', 'index.html')));
}
app.use((error, _req, res, _next) => {
  const status =
    error.code === 'LIMIT_FILE_SIZE'
      ? 413
      : error.status || (error.name === 'MulterError' ? 400 : 500);
  if (status >= 500) console.error('Request failed:', error);
  res.status(status).json({
    error:
      status >= 500
        ? 'Internal server error'
        : error.code === 'LIMIT_FILE_SIZE'
          ? 'The uploaded file is too large.'
          : error.message,
  });
});

const server = app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${server.address().port}`);
  console.log(`API available at http://localhost:${server.address().port}/api`);
});
