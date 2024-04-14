import express from 'express';
import { getRevenues, insertRevenue } from '../../controllers/v1/revenue.js';

const revenueRoutes = express.Router();

revenueRoutes.get('/dashboard', getRevenues);
revenueRoutes.get('/revenue', insertRevenue);

export { revenueRoutes };
