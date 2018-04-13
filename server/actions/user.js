const user = require('../models/user.js')

const getUsers = async function (ctx) {
  const id = ctx.params.id // 获取url里传过来的参数里的id
  const result = await user.getUsers(id)  // 通过yield “同步”地返回查询结果
  ctx.body = result // 将请求的结果放到response的body里返回
}

module.exports = {
  getUsers // 把获取用户信息的方法暴露出去
}
