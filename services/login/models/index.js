const db = require('../config/mongodb')
const Users = db.collection('Users')

class User {

  static getOne(username){
    return Users.findOne({
      username: username
    })
  }

}

module.exports = User