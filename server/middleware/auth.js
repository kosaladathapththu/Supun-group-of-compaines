import jwt from 'jsonwebtoken';
import db from '../database/init.js';
import { jwtSecret } from '../config.js';

export function authenticateToken(req, res, next) {
  const token = req.headers.authorization?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ error: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, jwtSecret, { algorithms: ['HS256'] });
    const user = db
      .prepare('SELECT id, username, role, tokenVersion FROM users WHERE id = ?')
      .get(decoded.id);
    if (!user || (decoded.version ?? 0) !== user.tokenVersion)
      return res.status(401).json({ error: 'Invalid or expired session' });
    req.user = { id: user.id, username: user.username, role: user.role };
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid or expired token' });
  }
}

export function isAdmin(req, res, next) {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Access denied. Admin role required.' });
  }
  next();
}
