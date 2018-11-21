const express = require('express')
const app = express()
const bodyparser = require('body-parser')
// const foundation = require('foundation-sites') 
const path = require('path')
const SQLZ = require("sequelize")
const sequelize = new SQLZ('mysql://root:rootroot@localhost:3306/biblioteca_db');

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyparser.urlencoded({
  extended: true
}))
app.use(bodyparser.json())

require('./routes')(app)

// sync DB and listen
require('./models').sequelize.sync().then(() => {
  const PORT = process.env.PORT || 3000
  app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`)
  })
})