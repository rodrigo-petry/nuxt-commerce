import index from './index'

const resource = '/products'

export default {
  get () {
    return index.get(`${resource}`)
  },

  detail (product_id) {
    return index.get(`${resource}/${product_id}`)
  },

  delete (product_id) {
    return index.delete(`${resource}/${product_id}`)
  },

  create (product) {
    return index.post(`${resource}`, product)
  },
  
  update (product_id, product) {
    return index.put(`${resource}/${product_id}`, product)
  }
}