const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyparser.urlencoded({
  extended: true
}))
app.use(bodyparser.json())

require('./routes')(app)

// sync DB and listen
require('./models').sequelize.sync().then(() => {
  const PORT = process.env.PORT || 2000
  app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`)
  })
})