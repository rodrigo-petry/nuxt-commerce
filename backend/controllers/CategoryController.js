const Category = require('../models/Category')

module.exports = {
  async index (req, res) {
    categories = await Category.find()

    return res.json(categories)
  },

  async show (req, res) {
    const { category_id } = req.params

    categories = await Category.find({ _id: category_id })

    return res.json(categories)
  },

  async store (req, res) {
    const { name, description } = req.body

    categories = await Category.create({
      name,
      description
    }) 

    return res.json(categories)
  },

  async update (req, res) {
    const { name, description } = req.body
    const { category_id } = req.params

    categories = await Category.findByIdAndUpdate(category_id, {
      name,
      description
    })

    return res.json(categories)
  },

  async destroy (req, res) {
    const { category_id } = req.params 

    categories = await Category.findByIdAndDelete(category_id)

    return res.json(categories)
  }
}