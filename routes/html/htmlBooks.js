// Books HTML routes
const path = require('path')

// HTML-Routes
module.exports = (app) => {

    app.get('/booksPage', (req, res) => {
      res.sendFile(path.join(__dirname, '../public/books/index.html'))
    })

} // module.exports  
