const jwt = require('jsonwebtoken')

class Jwt {
  static sign(payload){
    return jwt.sign(payload, 'secret')
  }
  static verify(token){
    return jwt.verify(token,'secret')
  }
}

module.exports = Jwt