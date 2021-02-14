const jwt = require('jsonwebtoken')

class Jwt {
  static sign(payload){
    return jwt.sign(payload, 'secret')
  }
}

module.exports = Jwt