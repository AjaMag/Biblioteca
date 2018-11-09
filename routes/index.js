const db = require('../models')

// module.exports = app => {
//     app.get('/ ', (req, res) => {
//         db. .findAll({})
//         .then(r => res.json(r))
//         .catch(e => console.log(e))
//     })

//     app.get('/ ', (req, res) => {
//         db. .findAll({})
//         .then(r => res.json(r))
//         .catch(e => console.log(e))
//     })
//     app.post('/ ', (req, res) => {
//         console.log(req.body)
//         db. .create(req.body)
//         .then(r => res.sendStatus(200))
//         .catch(e => console.log(e))
//     })

//     app.post('/ ', (req, res) => {
//         db. .create(req.body)
//         .then(r => res.sendStatus(200))
//         .catch(e => console.log(e))
//     })
// }