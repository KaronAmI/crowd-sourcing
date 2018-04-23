const project = require('../models/project.js')

const delProjectByProjectId = async (ctx) => {
  const send = ctx.request.body
  const existingProject = await project.delProjectByProjectId(send)
  const result = await existingProject.destroy()
  if (result.id) {
    ctx.body = {
      msg: '删除成功',
      error: false
    }
  }
}
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
const updateProjectById = async function (ctx) {
  const send = ctx.request.body
  const result = await project.updateProjectById(send)
  ctx.body = result
}
const publish = async function (ctx) {
  const send = ctx.request.body
  const result = await project.publish(send)
  ctx.body = result
}
module.exports = {
  publish,
  delProjectByProjectId,
  addProject,
  getProjectsByCustomerId,
  updateProjectById
}
