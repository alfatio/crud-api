
function errorHandler (err,req,res,next){
  let status,message = err.message || null
  switch (err.message) {
    case 'username already exist':
    case 'user already exist':
    case 'invalid input':
      status = 400
      message = err.message
      break
    case 'fail authentication':
      status = 401
      message = err.message
      break
    case 'unauthorized':
      status = 403
      message = err.message
      break
    default:
      status = 500
      message = 'internal server error'
  }
  res.status(status).json({message})
}

module.exports = errorHandler