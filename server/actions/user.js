const user = require('../models/user.js')

const getUsers = async function (ctx) {
  const id = ctx.params.id
  const result = await user.getUsers(id)
  ctx.body = result
}

const getUserByEmail = async function (ctx) {
  const login = ctx.request.body
  const result = await user.getUserByEmail(login)
  if (result.password === login.password ) {
    ctx.body = {
      isUser: true,
      id: result.id,
      type: result.type,
      msg: ''
    }
  } else {
    ctx.body = {
      isUser: false,
      msg: '邮箱或密码错误'
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
