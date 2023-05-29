import catalogController from '../controllers/catalog.controller.js'

export default (server, router) => {
    router.post("/", catalogController.create)
    router.get("/", catalogController.findAll)
    router.get("/:id", catalogController.findOne)
    router.put("/:id", catalogController.update)
    router.delete("/:id", catalogController.deleteOne)
    router.delete("/", catalogController.deleteAll)
    server.use('/api/catalog', router)
}