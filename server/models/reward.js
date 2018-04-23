const db = require('../config/db.js')
const rewardModel = '../schema/rewards.js'
const CsDb = db.cs

const Reward = CsDb.import(rewardModel)

// const getUsers = async function () {
//   return await User.findAll()
// }

const delReward = async (obj) => {
  return await Reward.findOne({
    where: {
      id: obj.id
    }
  })
}

const getRewardsByProjectId = async function (obj) {
  const rewards = await Reward.findAll({
    where: {
      projectId: obj.projectId
    }
  })
  return rewards
}

const addReward = async function (reward) {
  const resultReward = await Reward.create({
    projectId: reward.projectId,
    grade: reward.grade,
    reward: reward.reward
  })
  let msg = {}
  if (resultReward.id) {
    msg = {
      msg: '保存成功',
      error: false
    }
  } else {
    msg = {
      msg: '保存失败',
      error: true
    }
  }
  return Object.assign({}, msg, resultReward.dataValues)
}

module.exports = {
  getRewardsByProjectId,
  addReward,
  delReward
}
