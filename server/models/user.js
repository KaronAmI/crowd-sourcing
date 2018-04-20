const db = require('../config/db.js')
const userModel = '../schema/users.js'
const CsDb = db.cs

const User = CsDb.import(userModel)

const getUsers = async function () {
  return await User.findAll()
}

const getUserByEmail = async function (login) {
  const user = await User.findOne({
    where: {
      email: login.email
    }
  })
  if (user.password === login.password ) {
    return {
      isUser: true,
      msg: ''
    }
  } else {
    return {
      isUser: false,
      msg: '邮箱或密码错误'
    }
  }
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
  getUserByEmail,
  addUser
}
