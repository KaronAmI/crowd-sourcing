const db = require('../config/db.js')
const projectModel = '../schema/projects.js'
const CsDb = db.cs

const Project = CsDb.import(projectModel)

const getProjectsByCustomerId = async (obj) => {
  return await Project.findAll({
    where: {
      customerId: obj.customerId
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
  await Project.update(
    {
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

module.exports = {
  getProjectsByCustomerId,
  getProjectByName,
  addProject,
  updateProjectById
}