
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
    case 'updateProject':
      url = `${host}/api/project/updateProjectById`
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
    case 'getApplicationsForTester':
      url = `${host}/api/application/getApplicationsForTester`
      break
    case 'getApplicationsForProject':
      url = `${host}/api/application/getApplicationsForProject`
      break
  }
  return url
}
