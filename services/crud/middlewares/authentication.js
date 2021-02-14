const Jwt = require('../helpers/jwt')
const Users = require('../models')

class Authentication {
  static async authentication (req,res,next){
    try {
      if(!req.headers.access_token){
        throw "error"
      }
      let decoded = Jwt.verify(req.headers.access_token)
      let user = Users.getOne(decoded._id)
      if(user){
        req.loggedInUser = decoded
        next()
      }else{
        throw "error"
      }
    } catch (err) {
      next({
        message: 'fail authentication'
      })
    }
  }
}

module.exports = Authentication