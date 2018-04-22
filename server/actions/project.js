const project = require('../models/project.js')

const getProjectsByCustomerId = async function (ctx) {
  const send = ctx.request.body
  const result = await project.getProjectsByCustomerId(send)
  ctx.body = result
}
const addProject = async function (ctx) {
  const send = ctx.request.body
  const result = await project.addProject(send)
  ctx.body = result
}
module.exports = {
  addProject,
  getProjectsByCustomerId
}
  