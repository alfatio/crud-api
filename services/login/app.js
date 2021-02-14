const express = require('express')
const app = express()
const cors = require('cors')
const routes = require('./routes')
const PORT = process.env.PORT || 3002

app.use(express.urlencoded({ extended:true }))
app.use(express.json())
app.use(cors())

app.use(routes)

app.listen(PORT, () => {
  console.log(`login service running on port ${PORT}`)
})