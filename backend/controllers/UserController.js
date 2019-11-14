const User = require('../models/User')

module.exports = {
  async index (req, res) {
    users = await User.find()
    
    return res.json(users)
  },

  async show (req, res) {
    const { user_id } = req.params

    users = await User.find({ _id: user_id })

    return res.json(users)
  },

  async store (req, res) {
    const { name, lastname, email } = req.body

    users = await User.create({
      name,
      lastname,
      email
    })

    return res.json(users)
  },

}