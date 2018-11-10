// Books HTML routes
const path = require('path')

// HTML-Routes
module.exports = (app) => {

    app.get('/booksadmin', (req, res) => {
      res.sendFile(path.join(__dirname, '../../public/books/index.html'))
    })
    
    app.get('/booksadmin-add', (req, res) => {
      res.sendFile(path.join(__dirname, '../../public/books/bookAdd.html'))
    })
  
    app.get('/booksadmin-edit', (req, res) => {
      res.sendFile(path.join(__dirname, '../../public/books/bookEdit.html'))
    })
  
    app.get('/booksadmin-delete', (req, res) => {
      res.sendFile(path.join(__dirname, '../../public/books/boosDelete.html'))
    })

} // module.exports  
