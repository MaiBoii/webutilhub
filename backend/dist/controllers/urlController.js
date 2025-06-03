import { nanoid } from 'nanoid';
import redisClient from '../config';
const BASE_URL = process.env.BASE_URL || 'http://localhost:5173';
export const createShortUrl = async (req, res) => {
    const { originalUrl } = req.body;
    const shortId = nanoid(7);
    const shortUrl = `${BASE_URL}/${shortId}`;
    await redisClient.set(shortId, originalUrl);
    res.json({ shortUrl });
};
export const getOriginalUrl = async (req, res) => {
    const { shortId } = req.params;
    const originalUrl = await redisClient.get(shortId);
    if (!originalUrl)
        return res.status(404).json({ error: 'Not found' });
    res.redirect(originalUrl);
};
