const db = require('../config/db.js')
const userModel = '../schema/user.js' // 引入user的表结构
const CsDb = db.cs // 引入数据库

const User = CsDb.import(userModel) // 用sequelize的import方法引入表结构，实例化了User。

const getUsers = async function () { // 注意是function* 而不是function 对于需要yield操作的函数都需要这种generator函数。
  const userInfo = await User.findAll()
  return userInfo // 返回数据
}

module.exports = {
  getUsers  // 导出getUsers的方法，将会在controller里调用
}
