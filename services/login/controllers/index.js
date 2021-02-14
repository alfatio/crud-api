const User = require('../models')
const Jwt = require('../helpers/jwt')

class Controller {

  static async login(req,res,next){
    let obj = {
      username: req.body.username,
      password: req.body.password
    }
    try {
      let user = await User.getOne(obj.username)
      if(!user){
        throw {
          message: 'invalid username / password'
        }
      }
      if(user.password === obj.password){
        let access_token = Jwt.sign({
          id: user._id,
          username: user.username,
          role: user.role
        })
        res.status(200).json({access_token: access_token})
      }else{
        throw {
          message: 'invalid username / password'
        }
      }
    } catch (err) {
      res.status(400).json({message: err.message})
    }
  }

}

module.exports = Controller