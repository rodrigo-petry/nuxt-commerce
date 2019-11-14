import axios from 'axios'

const baseDomain = 'http://localhost:3333'
const baseURL = `${baseDomain}`

export default axios.create({
  baseURL
})
