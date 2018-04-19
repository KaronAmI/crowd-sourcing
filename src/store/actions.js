import { fetch } from '../api'
import { findApi } from '../api/url'

export default {
  fetchByMethod: ({commit}, {method, type, params}) => {
    const url = findApi(type)
    return fetch(method, url, params).then(({data}) => {
      commit('setState', {type, data})
    })
  }
}
