const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')

const routes = require('./routes')

const app = express()

mongoose.connect('mongodb+srv://rodrigo:gqwabc123@omnistack-5l5vj.mongodb.net/ecommerce?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})

app.use(cors())
app.use(express.json())
app.use('/files', express.static(path.resolve(__dirname, 'uploads')))
app.use(routes)

app.listen(3333)