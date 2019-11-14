const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  name: String,
  lastname: String,
  email: String
})

module.exports = mongoose.model('User', UserSchema)