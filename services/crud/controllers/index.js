const User = require('../models')

class Controller {

  static async get (req,res,next){
    try {
      let user = await User.getOne(req.loggedInUser.id)
      res.status(200).json({user})
    } catch (err) {
      next(err)
    }
  }

  static async post (req,res,next){
    let obj = {
      username: req.body.username,
      password: req.body.password
    }
    try {
      if(!obj.username || !obj.password){
        throw {
          message: 'invalid input'
        }
      }
      let newUser = await User.getOneUsername(obj.username)
      if(newUser){
        throw {
          message: 'user already exist'
        }
      }
      await User.insertOne(obj)
      res.status(201).json({message: 'ok'})
    } catch (err) {
      next(err)
    }
  }

  static async put (req,res,next){
    let obj = {
      username: req.body.username,
      password: req.body.password
    }
    try {
      if(!obj.username) delete obj.username
      if(!obj.password) delete obj.password
      if(!obj.username && !obj.password){
        throw {
          message: 'invalid input'
        }
      }
      let newUsername = await User.getOneUsername(obj.username)
      if(newUsername){
        throw {
          message: 'username already exist'
        }
      }
      await User.updateOne(req.params.id,obj)
      res.status(200).json({message: 'ok'})
    } catch (err) {
      next(err)
    }
  }

  static async delete (req,res,next) {
    try {
      await User.deleteOne(req.params.id)
      res.status(200).json({message:'ok'})
    } catch (err) {
      next(err)
    }
  }
}

module.exports = Controller