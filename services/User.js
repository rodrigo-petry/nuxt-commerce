import index from './index'

const resource = '/users'

export default {
  login (user) {
    return index.post(`${resource}/login`, user)
  }
}