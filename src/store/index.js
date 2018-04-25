import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login: {
      id: 10,
      isUser: true,
      msg: '',
      type: 'tester'
    },
    isNewProject: false,
    projectStep: 1,
    addDevice: '',
    deviceForTester: '',
    delDeviceByDeviceId: '',
    getProjectByProjectId: '',
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
    getRewardsByProjectId: '',
    addApplication: '',
    getApplicationsForTester: '',
    getApplicationsForProject: ''
  },
  mutations,
  actions,
  getters
})
