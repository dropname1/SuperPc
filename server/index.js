const express = require('express')
const cors = require('cors')

const server = express()

server.use(cors({origin:'http://localhost:5173'}))

server.get('/', (req, res) => {
  res.json({ title: 'SuperPC' })
})

const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})