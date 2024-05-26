import path from 'path'
import catalogRoutes from './catalog.routes.js'

const __dirname = path.resolve()

export default (server, router) => {
    server.get('/', (req, res) => res.sendFile(__dirname + '/public/index.html'))
    catalogRoutes(server, router)
}