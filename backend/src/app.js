import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import urlRoutes from './routes/urlRoutes.js'
import logger from './middlewares/logger.js'
import ipExtractor from './middlewares/ipExtractor.js'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
app.use(logger)
app.use(ipExtractor)
app.use('/api', urlRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`)
})
