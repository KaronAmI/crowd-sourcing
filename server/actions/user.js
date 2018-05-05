const user = require('../models/user.js')

const getUsers = async function (ctx) {
  const id = ctx.params.id
  ctx.body = await user.getUsers(id)
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
        integral: result.integral,
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
  ctx.body = await user.addUser(send)
}
const updateIntegralByUserId = async function (ctx) {
  const send = ctx.request.body
  ctx.body = await user.updateIntegralByUserId(send)
}
const getUserInfoByEmail = async function (ctx) {
  const send = ctx.request.body
  ctx.body = await user.getUserByEmail(send)
}
module.exports = {
  getUserInfoByEmail,
  updateIntegralByUserId,
  getUsers,
  getUserByEmail,
  addUser
}
