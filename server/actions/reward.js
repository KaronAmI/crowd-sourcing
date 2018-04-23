const reward = require('../models/reward.js')

const addReward = async function (ctx) {
  const send = ctx.request.body
  const result = await reward.addReward(send)
  ctx.body = result
}
const getRewardsByProjectId = async function (ctx) {
  const send = ctx.request.body
  const result = await reward.getRewardsByProjectId(send)
  ctx.body = result
}
const delReward = async (ctx) => {
  const send = ctx.request.body
  const existingReward = await reward.delReward(send)
  existingReward.destroy()
  ctx.body = {
    error: false,
    msg: '删除成功'
  }
}
module.exports = {
  addReward,
  getRewardsByProjectId,
  delReward
}
