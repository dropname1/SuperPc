import express from 'express'
import cors from 'cors'
import db from './src/models/index.js'
import routes from './src/routes/index.js'
import logger from './src/middleware/logger.js'

const server = express()
const router = express.Router()

server.use(cors({ origin: 'http://localhost:5173' }))
server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use(logger)

db.sequelize.sync()

routes(server, router)

const PORT = process.env.PORT || 3000

server.listen(PORT, console.log(`http://localhost:${PORT}`))