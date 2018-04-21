const device = require('../models/device.js')

const delDeviceByDeviceId = async (ctx) => {
  const send = ctx.request.body
  const existingDevice = await device.delDeviceByDeviceId(send)
  existingDevice.destroy()
  ctx.body = {
    error: false,
    msg: '删除成功'
  }
}

const addDevice = async function (ctx) {
  const send = ctx.request.body
  const result = await device.addDevice(send)
  ctx.body = result
}

const getDeviceByTesterId = async function (ctx) {
  const send = ctx.request.body
  const result = await device.getDeviceByTesterId(send)
  ctx.body = result
}

module.exports = {
  addDevice,
  getDeviceByTesterId,
  delDeviceByDeviceId
}
