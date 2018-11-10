const path = require('path')

// HTML-Routes
module.exports = (app) => {


    // Department HTML routes .................................................
    app.get('/books', (req, res) => {
      res.sendFile(path.join(__dirname, '../public/books/index.html'))
    })

} // module.exports  