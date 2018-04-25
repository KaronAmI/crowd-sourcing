const application = require('../models/application.js')

const getApplications = async function (ctx) {
  const send = ctx.request.body
  const result = await application.getApplicationByProjectIdAndTesterId(send)
  ctx.body = result
}

const addApplication = async function (ctx) {
  const send = ctx.request.body
  const result = await application.addApplication(send)
  let msg = {}
  if (result.msg) {
    msg = {
      msg: '请不要重复申请该项目',
      error: true
    }
  } else {
    msg = {
      msg: '申请成功',
      error: false
    }
  }
  ctx.body = Object.assign({}, msg, result.dataValues)
}

module.exports = {
  getApplications,
  addApplication
}
