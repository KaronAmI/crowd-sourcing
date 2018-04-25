const application = require('../models/application.js')
const project = require('../models/project.js')
const user = require('../models/user.js')

const getApplicationsForTester = async function (ctx) {
  const send = ctx.request.body
  const applications = await application.getApplicationsByTesterId(send)
  const result = []
  for (let a of applications) {
    const p = await project.getProjectByProjectId(a)
    const r = Object.assign({}, p.dataValues, a.dataValues)
    result.push(r)
  }
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

const getApplicationsForProject = async function (ctx) {
  const send = ctx.request.body
  const applications = await application.getApplicationByProjectId(send)
  const result = []
  for (let a of applications) {
    const p = await project.getProjectByProjectId(a)
    p.dataValues.projectName = p.dataValues.name
    const u = await user.getUserByTesterId(a)
    u.dataValues.userName = u.dataValues.name
    const r = Object.assign({}, p.dataValues, u.dataValues, a.dataValues)
    result.push(r)
  }
  ctx.body = result
}

module.exports = {
  getApplicationsForTester,
  getApplicationsForProject,
  addApplication
}
