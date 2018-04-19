const db = require('../config/db.js')
const userModel = '../schema/users.js'
const CsDb = db.cs

const User = CsDb.import(userModel)

const getUsers = async function () {
  return await User.findAll()
}

const getUserByName = async function (name) {
  const user = await User.findOne({
    where: {
      email: name
    }
  })
  return user
}

const addUser = async function (user) {
  await User.create({
    name: user.name,
    email: user.email,
    type: user.type,
    password: user.password
  })
  return {
    msg: '注册成功'
  }
}

module.exports = {
  getUsers,
  getUserByName,
  addUser
}
