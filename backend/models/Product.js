const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
  thumbnail: String,
  title: String,
  description: String,
  price: Number,
  category_id: String
}, {
  toJSON: {
    virtuals: true,
  }
})

ProductSchema.virtual('thumbnail_url').get(function() {
  return `http://localhost:3333/files/resized/${this.thumbnail}`
});

module.exports = mongoose.model('Product', ProductSchema)