import express from 'express';
import shortUrlRouter from './shortUrl';
const router = express.Router();
router.use('/', shortUrlRouter);
export default router;
