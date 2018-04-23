const db = require('../config/db.js')
const deviceModel = '../schema/devices.js'
const CsDb = db.cs

const Device = CsDb.import(deviceModel)

const delDeviceByDeviceId = async (obj) => {
  const device = await Device.findOne({
    where: {
      id: obj.deviceId
    }
  })
  return device
}

const getDeviceByTesterId = async (obj) => {
  const device = await Device.findAll({
    where: {
      testerId: obj.testerId
    }
  })
  return device
}

const getDeviceByOsVersionAndTesterId = async (obj) => {
  const device = await Device.findOne({
    where: {
      osVersion: obj.osVersion,
      testerId: obj.testerId
    }
  })
  return device
}

const addDevice = async (obj) => {
  const existingDevice = await getDeviceByOsVersionAndTesterId(obj)
  if (existingDevice) {
    return {
      error: true,
      msg: '该设备已存在'
    }
  } else {
    await Device.create({
      name: obj.name,
      os: obj.os,
      osVersion: obj.osVersion,
      manufacturer: obj.manufacturer,
      testerId: obj.testerId
    })
    return {
      error: false,
      msg: '添加设备成功'
    }
  }
}

module.exports = {
  addDevice,
  getDeviceByTesterId,
  delDeviceByDeviceId
}
