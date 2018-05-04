const db = require('../config/db.js')
const defectModel = '../schema/defects.js'
const CsDb = db.cs

const Defect = CsDb.import(defectModel)

const getDefectsByProjectIdAndTesterId = async ({projectId, testerId}) => {
  const defects = await Defect.findAll({
    where: {
      projectId: projectId,
      testerId: testerId
    }
  })
  return defects
}

const getDefectsByReport = async ({projectId}) => {
  const defects = await Defect.findAll({
    where: {
      projectId: projectId,
      status: '通过'
    }
  })
  return defects
}

const getDefectsBySettle = async ({projectId, testerId}) => {
  const defects = await Defect.findAll({
    where: {
      projectId: projectId,
      testerId: testerId,
      status: '通过'
    }
  })
  return defects
}

const getDefectsByCustomer = async ({projectId, testerId, isCommit}) => {
  const defects = await Defect.findAll({
    where: {
      projectId: projectId,
      testerId: testerId,
      isCommit: true
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
      status: '未处理',
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

const updateDefectById = async ({id, name, status, grade}) => {
  await Defect.update({
      status: status,
      grade: status === '通过' ? grade : '无' ,
    }, {
      where: {
        id: id
      }
    }
  )
  return {
    msg: `鉴定${name}成功`,
    error: false
  }
}

module.exports = {
  getDefectsByCustomer,
  getDefectsByReport,
  getDefectsBySettle,
  delDefectByDefectId,
  getDefectsByProjectIdAndTesterId,
  updateDefectById,
  commit,
  addDefect
}
