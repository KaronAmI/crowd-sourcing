const db = require('../config/db.js')
const applicationModel = '../schema/applications.js'
const CsDb = db.cs

const Application = CsDb.import(applicationModel)

const getApplicationByProjectIdAndTesterId = async function (obj) {
  const application = await Application.findOne({
    where: {
      projectId: obj.projectId,
      testerId: obj.testerId
    }
  })
  return application
}

const getApplicationByProjectId = async function (obj) {
  const applications = await Application.findAll({
    where: {
      projectId: obj.projectId
    }
  })
  return applications
}

const getApplicationsByTesterId = async function (obj) {
  const applications = await Application.findAll({
    where: {
      testerId: obj.testerId
    }
  })
  return applications
}

const addApplication = async function (obj) {
  const existingApplication = await getApplicationByProjectIdAndTesterId(obj)
  if (existingApplication) {
    return {
      msg: 'existing'
    }
  } else {
    return await Application.create({
      projectId: obj.projectId,
      testerId: obj.testerId,
      auditTime: obj.auditTime,
      isPass: obj.isPass
    })
  }
  // let msg = {}
  // if (resultApplication.id) {
  //   msg = {
  //     msg: '保存成功',
  //     error: false
  //   }
  // } else {
  //   msg = {
  //     msg: '保存失败',
  //     error: true
  //   }
  // }
  // return Object.assign({}, msg, resultApplication.dataValues)
}

module.exports = {
  getApplicationByProjectIdAndTesterId,
  getApplicationsByTesterId,
  getApplicationByProjectId,
  addApplication
}
