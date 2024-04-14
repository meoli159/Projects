import express from 'express';

import { authRoutes } from './user.js';
import { revenueRoutes } from './revenue.js';

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/admin', revenueRoutes);
export { router as routes };
