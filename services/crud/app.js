const express = require('express')
const app = express()
const cors = require('cors')
const routes = require('./routes')
const errorHandler = require('./middlewares/errorHandler')
const PORT = process.env.PORT || 3001

app.use(express.urlencoded({ extended:true }))
app.use(express.json())
app.use(cors())

app.use('/users',routes)
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`crud service running on port ${PORT}`)
})