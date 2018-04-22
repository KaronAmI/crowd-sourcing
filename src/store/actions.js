import { fetch } from '../api'
import { findApi } from '../api/url'

export default {
  fetchByMethod ({commit}, {method, type, params}) {
    const url = findApi(type)
    return fetch(method, url, params).then(({data}) => {
      commit('setState', {type, data})
    })
  },
  setProject ({commit}, {type, data}) {
    return commit('setState', {type, data})
  },
  setRewards ({commit}, {data}) {
    return commit('setRewards', {data})
  },
  delRewards ({commit}, {data}) {
    return commit('delRewards', {data})
  }
}
