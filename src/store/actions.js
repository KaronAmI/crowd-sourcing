import { fetch } from '../api'
import { findApi } from '../api/url'

export default {
  fetchByMethod ({commit}, {method, type, params}) {
    const url = findApi(type)
    return fetch(method, url, params).then(({data}) => {
      if (type === 'addReward') {
        commit('setRewards', {type, data})
      } else {
        if (type === 'login') {
          if (data.error) {
            sessionStorage.setItem('cs-user-id', null)
            sessionStorage.setItem('cs-user-email', null)
            sessionStorage.setItem('cs-user-type', null)
            sessionStorage.setItem('cs-user-msg', null)
            sessionStorage.setItem('cs-user-integral', null)
          } else {
            sessionStorage.setItem('cs-user-id', data.id)
            sessionStorage.setItem('cs-user-email', data.email)
            sessionStorage.setItem('cs-user-type', data.type)
            sessionStorage.setItem('cs-user-msg', data.msg)
            sessionStorage.setItem('cs-user-integral', data.integral)
          }
        }
        commit('setState', {type, data})
      }
    })
  },
  setRewards ({commit}, {data}) {
    return commit('setRewards', {data})
  },
  delRewards ({commit}, {data}) {
    return commit('delRewards', {data})
  },
  setState ({commit}, {type, data}) {
    commit('setState', {type, data})
  }
}
