// src/routes/shortUrl.ts
import express from 'express';
import { nanoid } from 'nanoid';
import redisClient from '../services/redisService';
const router = express.Router();
router.post('/shorten', async (req, res) => {
    const { originalUrl } = req.body;
    if (!originalUrl || typeof originalUrl !== 'string') {
        return res.status(400).json({ message: '유효한 URL을 입력해주세요.' });
    }
    const shortKey = nanoid(7);
    const shortUrl = `http://localhost:3000/${shortKey}`;
    await redisClient.set(shortKey, originalUrl);
    return res.json({ shortUrl });
});
export default router;
