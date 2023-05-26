import processor from '../controllers/catalog.controller.js'

export default (server, router) => {

    router.post("/", processor.create)

    router.get("/", processor.findAll)

    router.get("/published", processor.findAllPublished)

    router.get("/:id", processor.findOne)

    router.put("/:id", processor.update)

    router.delete("/:id", processor.deleteOne)

    router.delete("/", processor.deleteAll)

    server.use('/api/catalog', router)

}