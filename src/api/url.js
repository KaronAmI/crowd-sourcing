
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
    case 'project':
      url = `${host}/api/project/addProject`
      break
    case 'projectsForCustomer':
      url = `${host}/api/project/getProjectsByCustomerId`
      break
  }
  return url
}
