
const host = process.env.NODE_ENV === 'production' ? window.location.origin : ''

/**
 * 根据种类不同获取不同 api 路径
 * @param {string} type 类别
 */
export const findApi = (type) => {
  let url = ''
  switch (type) {
    case 'addUser':
      url = `${host}/crowd-sourcing/users/register`
      break
    case 'login':
      url = `${host}/crowd-sourcing/users/login`
      break
  }
  return url
}
