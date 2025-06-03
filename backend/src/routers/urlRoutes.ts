import express from 'express'
import shortUrlRouter from './shortUrl.js'

const router = express.Router()

router.use('/', shortUrlRouter)

export default router
