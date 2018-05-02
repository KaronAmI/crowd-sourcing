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
}

const delApplicationById = async (obj) => {
  return await Application.findOne({
    where: {
      id: obj.id
    }
  })
}

const updateApplicationById = async (obj) => {
  await Application.update({
      isPass: obj.isPass
    }, {
      where: {
        id: obj.id
      }
    }
  )
  return {
    msg: '更新成功',
    error: false
  }
}

module.exports = {
  getApplicationByProjectIdAndTesterId,
  getApplicationsByTesterId,
  getApplicationByProjectId,
  delApplicationById,
  updateApplicationById,
  addApplication
}
