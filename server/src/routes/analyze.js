import express from 'express';
import { analyzeRepository } from '../services/analyzers.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const { repo } = req.query; // expected owner/repo
  if (!repo) return res.status(400).json({ error: 'repo query (owner/repo) is required' });
  try {
    const result = await analyzeRepository(repo);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: String(err.message || err) });
  }
});

export default router;
