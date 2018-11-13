// books Routes 

const db = require('../../models')

module.exports = app => {

  // find all
  app.get("/librarybooks", (req, res) => {
    db.books.findAll({
        include: [db.sections]
      })
      .then(r => res.json(r))
      .catch(e => console.error(e))
  })

  // Find-one
  app.get('/librarybooks/:id', (req, res) => {
    db.books.findOne({
        include: [db.sections],
        where: {
          id: req.params.id
        }
      })
      .then(r => res.json(r))
      .catch(e => console.error(e))
  })

  // find all prod for a department 
  app.get('/librarybooks-section/:id', (req, res) => {
    console.log(req.params.id)
    db.books.findAll({
        include: [db.sections],
        where: {
          sectionId: req.params.id
        }
      })
      .then(r => res.json(r))
      .catch(e => console.error(e))
  })

  // Create
  app.post('/librarybooks', (req, res) => {
    db.books.create(req.body)
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })

  // Update
  app.put('/librarybooks/:id', (req, res) => {
    db.books.update(req.body, {
        where: {
          id: req.params.id
        }
      })
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })

  // delete-one
  app.delete('/librarybooks/:id', (req, res) => {
    db.books.destroy({
        where: {
          id: req.params.id
        }
      })
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })

  // delete-all
  app.delete('/librarybooks', (req, res) => {
    db.books.destroy({
        where: {},
        truncate: true
      })
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })


} // module.exports