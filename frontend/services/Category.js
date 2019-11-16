import index from './index'

const resource = '/categories'

export default {
  get () {
    return index.get(`${resource}`)
  },

  detail (category_id) {
    return index.get(`${resource}/${category_id}`)
  },

  delete (category_id) {
    return index.delete(`${resource}/${category_id}`)
  },

  create (category) {
    return index.post(`${resource}`, category)
  },

  update (category_id, category) {
    return index.put(`${resource}/${category_id}`, category)
  }
}