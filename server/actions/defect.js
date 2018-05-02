const defect = require('../models/defect.js')

const getDefects = async function (ctx) {
  const send = ctx.request.body
  const defects = await defect.getDefectsByProjectIdAndTesterId(send)
  ctx.body = defects
}

const addDefect = async function (ctx) {
  const send = ctx.request.body
  const result = await defect.addDefect(send)
  let msg = {}
  if (~result) {
    msg.error = false
    msg.msg = '添加缺陷成功'
  } else {
    msg.error = true
    msg.msg = '该缺陷名已存在'
  }
  ctx.body = Object.assign({}, msg, result.dataValues)
}

const commit = async function (ctx) {
  const send = ctx.request.body
  const result = await defect.commit(send)
  console.log(result)
  ctx.body = {
    msg: '提交',
    error: false
  }
}

const delDefect = async (ctx) => {
  const send = ctx.request.body
  const existingDefect = await defect.delDefectByDefectId(send)
  const result = await existingDefect.destroy()
  if (result.id) {
    ctx.body = {
      msg: '删除成功',
      error: false
    }
  }
}

const updateDefectById = async function (ctx) {
  const send = ctx.request.body
  const result = await defect.updateDefectById(send)
  ctx.body = result
}

module.exports = {
  updateDefectById,
  delDefect,
  getDefects,
  addDefect,
  commit
}