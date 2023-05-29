import db from "../models/index.js"
const Catalog = db.catalogModel
const Op = db.Sequelize.Op

function create(req, res) {
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    })
    return
  }

  const catalog = {
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    rate: req.body.rate,
    type: req.body.type,
    weight: req.body.weight,
    height: req.body.height,
    width: req.body.width
  }

  Catalog.create(catalog)
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Catalog."
      })
    })
}

function findAll(req, res) {
  const name = req.query.name
  var condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null

  Catalog.findAll({ where: condition })
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Catalogs."
      })
    })
}

function findOne(req, res) {
  const id = req.params.id

  Catalog.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data)
      } else {
        res.status(404).send({
          message: `Cannot find Catalog with id=${id}.`
        })
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Catalog with id=" + id
      })
    })
}

function update(req, res) {
  const id = req.params.id

  Catalog.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Catalog was updated successfully."
        })
      } else {
        res.send({
          message: `Cannot update Catalog with id=${id}. Maybe Catalog was not found or req.body is empty!`
        })
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Catalog with id=" + id
      })
    })
}

function deleteOne(req, res) {
  const id = req.params.id

  Catalog.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Catalog was deleted successfully!"
        })
      } else {
        res.send({
          message: `Cannot delete Catalog with id=${id}. Maybe Catalog was not found!`
        })
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Catalog with id=" + id
      })
    })
}

function deleteAll(req, res) {
  Catalog.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Catalog were deleted successfully!` })
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Catalog."
      })
    })
}

export default {
  create,
  findAll,
  findOne,
  update,
  deleteOne,
  deleteAll,
}