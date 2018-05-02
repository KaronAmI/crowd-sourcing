const db = require('../config/db.js')
const defectModel = '../schema/defects.js'
const CsDb = db.cs

const Defect = CsDb.import(defectModel)

const delDefectByDefectId = async (obj) => {
  const defect = await Defect.findOne({
    where: {
      id: obj.defectId
    }
  })
  return defect
}

const getDefectsByProjectIdAndTesterId = async (obj) => {
  const defects = await Defect.findAll({
    where: {
      projectId: obj.projectId,
      testerId: obj.testerId
    }
  })
  return defects
}

const checkDefectOnly = async (obj) => {
  const defect = await Defect.findOne({
    where: {
      projectId: obj.projectId,
      name: obj.name,
      testerId: obj.testerId
    }
  })
  return device
}

const addDefect = async (obj) => {
  const existingDefect = await checkDefectOnly(obj)
  if (existingDefect) {
    return {
      error: true,
      msg: '该缺陷名已存在'
    }
  } else {
    await Defect.create({
      name: obj.name,
      projectId: obj.projectId,
      testerId: obj.testerId,
      name: obj.name,
      description: obj.description,
      isUse: false,
      isCommit: false
    })
    return {
      error: false,
      msg: '成功添加缺陷'
    }
  }
}

module.exports = {
  getDefectsByProjectIdAndTesterId,
  addDefect
}
