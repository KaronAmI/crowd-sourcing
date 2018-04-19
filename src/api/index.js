import axios from 'axios'
import { Message } from 'element-ui'

var service = axios.create({
  headers: {'Content-Type': 'application/json'},
  timeout: 60000
})

service.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response.data.ret) {
      Message({
        message: error.response.data.msg,
        type: 'error'
      })
    }
    return Promise.reject(error.response)
  }
)

export const fetch = (method, url, params = '') => {
  const obj = {}
  obj.method = method
  obj.url = url
  if (method === 'post') {
    obj.data = params
  }
  return service(obj)
}
