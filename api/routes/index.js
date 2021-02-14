const route = require('express').Router()
const Controller = require('../controllers')

route.post('/login',Controller.login)

route.post('/users',Controller.register)
route.get('/users',Controller.getUser)

route.put('/users/:id',Controller.putUser)
route.delete('/users/:id',Controller.deleteUser)

module.exports = route