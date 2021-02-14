const axios = require('axios').default

const loginAPI = axios.create({
  baseURL: 'http://localhost:3002'
})

const crudAPI = axios.create({
  baseURL: 'http://localhost:3001'
})

module.exports = {
  loginAPI,crudAPI
}