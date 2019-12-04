import index from './index'

const resource = '/users'

export default {
  create (user) {
    return index.post(`${resource}`, user)
  }
}