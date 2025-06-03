import express from 'express';
import redisClient from '../services/redisService.js';
const router = express.Router();
router.get('/:shortKey', async (req, res) => {
    const { shortKey } = req.params;
    const originalUrl = await redisClient.get(shortKey);
    if (originalUrl) {
        return res.redirect(originalUrl);
    }
    res.status(404).send('URL을 찾을 수 없습니다.');
});
export default router;
