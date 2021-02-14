const routes = require('express').Router()
const Controller = require('../controllers')

routes.post('/login',Controller.login)

module.exports = routes