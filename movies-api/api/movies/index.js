import express from 'express';
import asyncHandler from 'express-async-handler';
import { getMovies } from '../tmdb-api.js';

const router = express.Router();

// /api/movies/discover
router.get('/discover', asyncHandler(async (req, res) => {
  const discoverMovies = await getMovies();
  res.status(200).json(discoverMovies);
}));

export default router;
