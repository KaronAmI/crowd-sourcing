const db = require('../config/db.js')
const projectModel = '../schema/projects.js'
const CsDb = db.cs

const Sequelize = require('sequelize')
const Op = Sequelize.Op
const Project = CsDb.import(projectModel)

const delProjectByProjectId = async (obj) => {
  return await Project.findOne({
    where: {
      id: obj.projectId
    }
  })
}
const getProjectsByCustomerId = async (obj) => {
  return await Project.findAll({
    where: {
      customerId: obj.customerId
    }
  })
}
const getProjectByProjectId = async (obj) => {
  return await Project.findOne({
    where: {
      id: obj.projectId
    }
  })
}
const getProjectByName = async (obj) => {
  const project = await Project.findOne({
    where: {
      name: obj.name
    }
  })
  return project
}
const addProject = async (obj) => {
  const existingProject = await getProjectByName(obj)
  if (existingProject) {
    return {
      error: true,
      msg: '该项目已存在'
    }
  } else {
    const newProject = await Project.create({
      name: obj.name,
      description: obj.description,
      start: obj.start,
      end: obj.end,
      os: obj.os,
      osVersion: obj.osVersion,
      phoneName: obj.phoneName,
      testerNumber: obj.testerNumber,
      isExamine: obj.isExamine,
      customerId: obj.customerId,
      isPublish: false
    })

    let msg = {}
    if (newProject.id) {
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

    return Object.assign({}, msg, newProject.dataValues)
  }
}
const updateProjectById = async (obj) => {
  await Project.update({
      name: obj.name,
      start: obj.start,
      end: obj.end,
      os: obj.os,
      osVersion: obj.osVersion,
      phoneName: obj.phoneName,
      testerNumber: obj.testerNumber,
      isExamine: obj.isExamine,
      customerId: obj.customerId
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
const updateProjectAppsrcById = async ({projectId, appsrc, fileName}) => {
  await Project.update({
      appsrc: appsrc,
      fileName: fileName
    }, {
      where: {
        id: projectId
      }
    }
  )
  return {
    msg: '更新成功',
    error: false
  }
}
const publish = async (obj) => {
  await Project.update({
      isPublish: obj.isPublish,
      releaseTime: new Date()
    }, {
      where: {
        id: obj.id
      }
    }
  )
  return {
    msg: '发布成功',
    error: false
  }
}
const getProjectsByPublish = async () => {
  return await Project.findAll({
    where: {
      isPublish: true
    }
  })
}
const searchProjectsByKey = async ({keyWord}) => {
  const byNames = await Project.findAll({
    where: {
      name: {
        [Op.like]: keyWord
      }
    }
  })
  if (byNames.length) {
    return byNames
  } else {
    const byOs = await Project.findAll({
      where: {
        os: {
          [Op.like]: keyWord
        }
      }
    })
    if (byOs.length) {
      return byOs
    } else {
      return await Project.findAll({
        where: {
          phoneName: {
            [Op.like]: keyWord
          }
        }
      })
    }
  }
}
module.exports = {
  searchProjectsByKey,
  updateProjectAppsrcById,
  delProjectByProjectId,
  getProjectsByCustomerId,
  getProjectByProjectId,
  getProjectByName,
  addProject,
  updateProjectById,
  publish,
  getProjectsByPublish
}
