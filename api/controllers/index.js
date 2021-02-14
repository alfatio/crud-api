const { crudAPI, loginAPI } = require('../config/axios')

class Controller {

  static async login(req,res){
    try {
      let { data } = await loginAPI.post('/login',{
        username: req.body.username,
        password: req.body.password
      })
      res.status(200).json({ access_token: data.access_token })
    } catch (err) {
      if(err.response){
        res.status(err.response.status).json({message: err.response.data.message})
      }else{
        res.status(500).json({message : 'internal server error'})
      }
    }
  }

  static async register(req,res){
    try {
      let { data } = await crudAPI.post('/users',{
        username: req.body.username,
        password: req.body.password
      })
      res.status(201).json({message: data.message})
    } catch (err) {
      if(err.response){
        res.status(err.response.status).json({message: err.response.data.message})
      }
      else{
        res.status(500).json({message : 'internal server error'})
      }
    }
  }

  static async getUser (req,res) {
    try {
      let { data } = await crudAPI.get('/users',{
        headers: {
          access_token: req.headers.access_token || null
        }
      })
      res.status(200).json(data)
    } catch (err) {
      if(err.response){
        res.status(err.response.status).json({message: err.response.data.message})
      }
      else{
        res.status(500).json({message : 'internal server error'})
      }
    }
  }

  static async putUser(req,res){
    try {
      let { data } = await crudAPI.put(`/users/${req.params.id}`,{
        username: req.body.username,
        password: req.body.password
      },{
        headers: {
          access_token: req.headers.access_token || null
        }
      })
      res.status(200).json({message: data.message})
    } catch (err) {
      if(err.response){
        res.status(err.response.status).json({message: err.response.data.message})
      }
      else{
        res.status(500).json({message : 'internal server error'})
      }
    }
  }

  static async deleteUser(req,res){
    try {
      let { data } = await crudAPI.delete(`/users/${req.params.id}`,{
        headers: {
          access_token: req.headers.access_token || null
        }
      })
      res.status(200).json({message: data.message})
    } catch (err) {
      if(err.response){
        res.status(err.response.status).json({message: err.response.data.message})
      }
      else{
        res.status(500).json({message : 'internal server error'})
      }
    }
  }
}

module.exports = Controller