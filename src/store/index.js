import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login: {},
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
    delApplication: '',
    updateApplication: '',
    getApplicationsForTester: '',
    getApplicationsForProject: '',
    addDefect: '',
    getDefects: '',
    getDefectsByCustomer: '',
    commit: '',
    getDefectsByReport: '',
    updateDefectById: '',
    updateProjectAppsrcById: '',
    getDefectsBySettle: ''
  },
  mutations,
  actions,
  getters
})
