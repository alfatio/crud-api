
class Authorization {
  static async authorization (req,res,next){
    try {
      if(req.params.id !== req.loggedInUser.id || req.loggedInUser.role !== 'admin'){
        throw {
          message: 'unauthorized'
        }
      }else{
        next()
      }
    } catch (err) {
      next(err)
    }
  }
}

module.exports = Authorization