
const host = process.env.NODE_ENV === 'production' ? window.location.origin : ''

/**
 * 根据种类不同获取不同 api 路径
 * @param {string} type 类别
 */
export const findApi = (type) => {
  let url = ''
  switch (type) {
    case 'register':
      url = `${host}/api/users/register`
      break
    case 'updateIntegral':
      url = `${host}/api/users/updateIntegralByUserId`
      break
    case 'getUserInfo':
      url = `${host}/api/users/getUserInfoByEmail`
      break
    case 'login':
      url = `${host}/api/users/login`
      break
    case 'addDevice':
      url = `${host}/api/devices/addDevice`
      break
    case 'deviceForTester':
      url = `${host}/api/devices/deviceForTester`
      break
    case 'delDeviceByDeviceId':
      url = `${host}/api/devices/delDeviceByDeviceId`
      break
    case 'publishProjects':
      url = `${host}/api/project/publishProjects`
      break
    case 'publish':
      url = `${host}/api/project/publish`
      break
    case 'project':
      url = `${host}/api/project/addProject`
      break
    case 'projectsForCustomer':
      url = `${host}/api/project/getProjectsByCustomerId`
      break
    case 'searchProjects':
      url = `${host}/api/project/searchProjects`
      break
    case 'updateProject':
      url = `${host}/api/project/updateProjectById`
      break
    case 'updateProjectAppsrcById':
      url = `${host}/api/project/updateProjectAppsrcById`
      break
    case 'delProjectByProjectId':
      url = `${host}/api/project/delProjectByProjectId`
      break
    case 'getProjectByProjectId':
      url = `${host}/api/project/getProjectByProjectId`
      break
    case 'addReward':
      url = `${host}/api/reward/addReward`
      break
    case 'delReward':
      url = `${host}/api/reward/delReward`
      break
    case 'getRewardsByProjectId':
      url = `${host}/api/reward/getRewardsByProjectId`
      break
    case 'addApplication':
      url = `${host}/api/application/addApplication`
      break
    case 'delApplication':
      url = `${host}/api/application/delApplication`
      break
    case 'updateApplication':
      url = `${host}/api/application/updateApplication`
      break
    case 'updateApplicationBySettle':
      url = `${host}/api/application/updateApplicationBySettle`
      break
    case 'getApplicationsForTester':
      url = `${host}/api/application/getApplicationsForTester`
      break
    case 'getApplicationsForProject':
      url = `${host}/api/application/getApplicationsForProject`
      break
    case 'addDefect':
      url = `${host}/api/defect/addDefect`
      break
    case 'getDefects':
      url = `${host}/api/defect/getDefects`
      break
    case 'getDefectsByCustomer':
      url = `${host}/api/defect/getDefectsByCustomer`
      break
    case 'commit':
      url = `${host}/api/defect/commit`
      break
    case 'delDefect':
      url = `${host}/api/defect/delDefect`
      break
    case 'updateDefectById':
      url = `${host}/api/defect/updateDefectById`
      break
    case 'getDefectsByReport':
      url = `${host}/api/defect/getDefectsByReport`
      break
    case 'getDefectsBySettle':
      url = `${host}/api/defect/getDefectsBySettle`
      break
    case 'getNewsByUserId':
      url = `${host}/api/news/getNewsByUserId`
      break
  }
  return url
}
