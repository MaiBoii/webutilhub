import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import urlRoutes from './routers/urlRoutes.js';
import redirectRouter from './routers/redirect.js';
import logger from './middlewares/logger'
//import ipExtractor from './middlewares/ipExtractor'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
// app.use(logger)
// app.use(ipExtractor)
app.use('/api', urlRoutes)
app.use('/', redirectRouter)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`)
})
