const db = require('../config/db.js')
const userModel = '../schema/users.js'
const CsDb = db.cs

const User = CsDb.import(userModel)

const getUsers = async function () {
  return await User.findAll()
}

const getUserByEmail = async function (obj) {
  const user = await User.findOne({
    where: {
      email: obj.email
    }
  })
  return user
}

const getUserByTesterId = async function (obj) {
  const user = await User.findOne({
    where: {
      id: obj.testerId
    }
  })
  return user
}
const addUser = async function (user) {
  const existingUser = await getUserByEmail(user)
  if (existingUser) {
    return {
      error: true,
      msg: '邮箱已存在'
    }
  } else {
    await User.create({
      name: user.name,
      email: user.email,
      type: user.type,
      password: user.password,
      integral: user.integral
    })
    return {
      error: false,
      msg: '注册成功'
    }
  }
}
const updateIntegralByUserId = async ({userId, integral}) => {
  await User.update({
      integral: integral
    }, {
      where: {
        id: userId
      }
    }
  )
  return {
    msg: '更新成功',
    error: false
  }
}

module.exports = {
  updateIntegralByUserId,
  getUsers,
  getUserByEmail,
  getUserByTesterId,
  addUser
}
