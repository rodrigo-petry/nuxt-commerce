const Product = require('../models/Product')
const sharp = require('sharp')
const path = require('path')
const fs = require('fs')

module.exports = {
  async index (req, res) {
    const { category } = req.body
    
    products = await Product.find(category ? { category_id: category } : null)

    return res.json(products)
  },

  async show (req, res) {
    const { product_id } = req.params

    products = await Product.find({ _id: product_id })

    return res.json(products)
  },

  async store (req, res) {
    const { filename: image } = req.file
    const { title, description, price, category_id } = req.body
    
    await sharp(req.file.path)
      .resize(500)
      .jpeg({ quality: 70 })
      .toFile(
        path.resolve(req.file.destination, 'resized', image)
      )
    
    fs.unlinkSync(req.file.path)

    products = await Product.create({
      thumbnail: image,
      title,
      description,
      price,
      category_id
    })

    return res.json(products)
  },

  async update (req, res) {
    const { title, description, price } = req.body
    const { filename: image } = req.file
    const { product_id } = req.params

    await sharp(req.file.path)
      .resize(500)
      .jpeg({ quality: 70 })
      .toFile(
        path.resolve(req.file.destination, 'resized', image)
      )
    
    fs.unlinkSync(req.file.path)

    products = await Product.findByIdAndUpdate(product_id, {
      thumbnail: image,
      title,
      description,
      price
    })

    return res.json(products)
  },

  async destroy (req, res) {
    const { product_id } = req.params

    products = await Product.findByIdAndDelete(product_id)

    return res.json(products)
  }
}