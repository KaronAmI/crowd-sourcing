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
      type: 'customer'
    },
    isNewProject: false,
    projectStep: 1,
    addDevice: '',
    deviceForTester: '',
    delDeviceByDeviceId: '',
    register: '',
    publishProjects: '',
    publish: '',
    project: '',
    projectsForCustomer: '',
    updateProject: '',
    delProjectByProjectId: '',
    rewards: [],
    addReward: '',
    delReward: '',
    getRewardsByProjectId: ''
  },
  mutations,
  actions,
  getters
})
