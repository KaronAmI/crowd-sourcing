const db = require('../config/db.js')
const userModel = '../schema/user.js'
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

module.exports = {
  getUsers,
  getUserByName
}
