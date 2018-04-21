import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login: {
      id: 9,
      isUser: true,
      msg: '',
      type: 'tester'
    },
    addDevice: '',
    deviceForTester: '',
    delDeviceByDeviceId: '',
    register: ''
  },
  mutations,
  actions,
  getters
})
