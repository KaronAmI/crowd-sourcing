const user = require('../models/user.js')

const getUsers = async function (ctx) {
  const id = ctx.params.id
  const result = await user.getUsers(id)
  ctx.body = result
}

const getUserByEmail = async function (ctx) {
  const login = ctx.request.body
  const result = await user.getUserByEmail(login)
  if (result !== null) {
    if (result.password === login.password ) {
      ctx.body = {
        error: false,
        id: result.id,
        email: result.email,
        type: result.type,
        msg: '登录成功'
      }
    } else {
      ctx.body = {
        error: true,
        msg: '密码错误!'
      }
    }
  } else {
    ctx.body = {
      error: true,
      msg: '用户不存在!'
    }
  }
}

const addUser = async function (ctx) {
  const send = ctx.request.body
  const result = await user.addUser(send)
  ctx.body = result
}

module.exports = {
  getUsers,
  getUserByEmail,
  addUser
}
