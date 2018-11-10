// books Routes 
const db = require('../../models')

module.exports = app => {

  // find all
  app.get("/books", (req, res) => {

    db.books.findAll({
        include: [db.sections]
      })
      .then(r => res.json(r))
      .catch(e => console.error(e))
  })

  app.get("/chartview/:id", (req, res) => {

    db.books.findAll({
      
      })
      .then(r => res.json(r))
      .catch(e => console.error(e))
  })

  // Find-one
  app.get('/books/:id', (req, res) => {
    db.books.findOne({
        include: [db.sections],
        where: {
          id: req.params.id
        }
      })
      .then(r => res.json(r))
      .catch(e => console.error(e))
  })

  // Create
  app.post('/books', (req, res) => {
    db.books.create(req.body)
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })

  // Update
  app.put('/books/:id', (req, res) => {
    db.books.update(req.body, {
        where: {
          id: req.params.id
        }
      })
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })

  // delete-one
  app.delete('/books/:id', (req, res) => {
    db.books.destroy({
        where: {
          id: req.params.id
        }
      })
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })

  // delete-all
  app.delete('/books', (req, res) => {
    db.books.destroy({
        where: {},
        truncate: true
      })
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })


} // module.exports