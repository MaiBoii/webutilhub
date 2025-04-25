import express from 'express'
import Redis from 'ioredis'

// Redis 클라이언트 생성
const redis = new Redis({
  host: 'localhost', // Redis 서버 주소 (기본적으로 localhost)
  port: 6379, // Redis 포트 (기본값 6379)
})

const router = express.Router()

// 단축 URL을 클릭할 때마다 클릭 수 증가시키는 API
router.get('/click/:shortId', async (req, res) => {
  const { shortId } = req.params

  try {
    // Redis에서 해당 shortId의 클릭 수 가져오기
    const clickCount = await redis.incr(`click:${shortId}`) // 'click:{shortId}' 키로 클릭 수 증가

    // 응답으로 클릭 수 반환
    res.json({ clickCount })
  } catch (error) {
    console.error('Redis 클릭 수 증가 실패:', error)
    res.status(500).json({ error: '서버 오류가 발생했습니다.' })
  }
})

export default router
