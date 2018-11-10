// Cart-Routes

const db = require('../../models')

module.exports = (app) => {

      // find all
  app.get("/carts", (req, res) => {

    db.carts.findAll({})
      .then(r => res.json(r))
      .catch(e => console.error(e))
  })

  // Find-one
  app.get('/carts/:id', (req, res) => {
    db.carts.findOne({
        where: {
          id: req.params.id
        }
      })
      .then(r => res.json(r))
      .catch(e => console.error(e))
  })

  // Create
  app.post('/carts', (req, res) => {
    db.carts.create(req.body)
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })

  // Update
  app.put('/carts/:id', (req, res) => {
    db.carts.update(req.body, {
        where: {
          id: req.params.id
        }
      })
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })

  // delete-one
  app.delete('/carts/:id', (req, res) => {
    db.carts.destroy({
        where: {
          id: req.params.id
        }
      })
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })

  // delete-all
  app.delete('/carts', (req, res) => {
    db.carts.destroy({
        where: {},
        truncate: true
      })
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })


}