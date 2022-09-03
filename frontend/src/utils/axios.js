import axios from 'axios'
console.log(process.env)
export const baseURL = 'http://localhost:8000'
const instance = axios.create({
  baseURL: baseURL
})

export default instance
