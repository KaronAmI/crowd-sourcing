const user = require('../models/user.js')

const getUsers = async function (ctx) {
  const id = ctx.params.id
  const result = await user.getUsers(id) 
  ctx.body = result
}

const getUserByName = async function (ctx) {
  const name = ctx.params.name
  const result = await user.getUserByName(name)
  ctx.body = result
}

module.exports = {
  getUsers,
  getUserByName
}
