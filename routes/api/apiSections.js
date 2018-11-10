// Section Routes 
const db = require('../../models')

module.exports = app => {

  // find all
  app.get("/sections", (req, res) => {

    db.sections.findAll({})
      .then(r => res.json(r))
      .catch(e => console.error(e))
  })

  // Find-one
  app.get('/sections/:id', (req, res) => {
    db.sections.findOne({
        where: {
          id: req.params.id
        }
      })
      .then(r => res.json(r))
      .catch(e => console.error(e))
  })

  // Create
  app.post('/sections', (req, res) => {
    db.sections.create(req.body)
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })

  // Update
  app.put('/sections/:id', (req, res) => {
    db.sections.update(req.body, {
        where: {
          id: req.params.id
        }
      })
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })

  // delete-one
  app.delete('/sections/:id', (req, res) => {
    db.sections.destroy({
        where: {
          id: req.params.id
        }
      })
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })

  // delete-all
  app.delete('/sections', (req, res) => {
    db.sections.destroy({
        where: {},
        truncate: true
      })
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })

} // module.exports