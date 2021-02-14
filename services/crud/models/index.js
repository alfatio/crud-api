const db = require('../config/mongodb')
const Users = db.collection('Users')
const { ObjectId } = require('mongodb')

const admins = {
  admin123: true,
  admin321: true
}

class User {

  static getAll(){
    const data = Users.find().toArray()
    return data
  }

  static getOne(id){
    const data = Users.findOne({
      _id: ObjectId(id)
    },{
      projection: {
        "password":0
      }
    })
    return data
  }

  static getOneUsername(username){
    return Users.findOne({
      username: username
    },{
      projection: {
        "password": 0
      }
    })
  }

  static insertOne(obj){
    if(obj.username in admins){
      obj.role = 'admin'
    }else{
      obj.role = 'user'
    }
    return Users.insertOne(obj)
  }

  static updateOne(id,obj){
    return Users.updateOne({
      _id: ObjectId(id)
    },{$set: obj})
  }

  static deleteOne(id){
    return Users.deleteOne({
      _id: ObjectId(id)
    })
  }
}

module.exports = User