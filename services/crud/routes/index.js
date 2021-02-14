const routes = require('express').Router()
const Authentication = require('../middlewares/authentication')
const Authorization = require('../middlewares/authorization')
const Controller = require('../controllers')

routes.post('/',Controller.post)

routes.use(Authentication.authentication)
routes.get('/',Controller.get)

routes.put('/:id',Authorization.authorization,Controller.put)
routes.delete('/:id',Authorization.authorization,Controller.delete)

module.exports = routes