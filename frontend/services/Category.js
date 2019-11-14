import index from './index'

const resource = '/categories'

export default {
  get () {
    return index.get(`${resource}`)
  }
}