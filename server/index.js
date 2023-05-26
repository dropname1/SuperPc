import express, { Router } from 'express'
import cors from 'cors'
import db from './src/models/index.js'
import routes from './src/routes/index.js'
import path from 'path'

const server = express()
const router = Router()
const __dirname = path.resolve()

server.use(cors({ origin: 'http://localhost:5173' }))
server.use(express.json())
server.use(express.urlencoded({ extended: true }))

db.sequelize.sync()

// Reset DB
// db.sequelize.sync({ force: true })

server.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

routes(server, router)

const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})