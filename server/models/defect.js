const db = require('../config/db.js')
const defectModel = '../schema/defects.js'
const CsDb = db.cs

const Defect = CsDb.import(defectModel)

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
  return defect
}

const addDefect = async (obj) => {
  const existingDefect = await checkDefectOnly(obj)
  if (existingDefect) {
    return -1
  } else {
    return await Defect.create({
      name: obj.name,
      projectId: obj.projectId,
      testerId: obj.testerId,
      name: obj.name,
      description: obj.description,
      status: 0,
      isCommit: false,
      grade: '无'
    })
  }
}

const commit = async (obj) => {
  return await Defect.update({
      isCommit: obj.isCommit
    }, {
      where: {
        id: obj.id
      }
    }
  )
}

const delDefectByDefectId = async (obj) => {
  return await Defect.findOne({
    where: {
      id: obj.defectId
    }
  })
}

const updateDefectById = async (obj) => {
  await Defect.update({
      name: obj.name,
      description: obj.description
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
  delDefectByDefectId,
  getDefectsByProjectIdAndTesterId,
  updateDefectById,
  commit,
  addDefect
}
