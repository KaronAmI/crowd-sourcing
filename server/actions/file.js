const fs = require('fs')
const project = require('./project.js')
const sendfile = require('koa-sendfile')

const upload = async (ctx) => {
  const file = ctx.request.body.files.file	// 获取上传文件
	const reader = fs.createReadStream(file.path)	// 创建可读流
  const fileName = file.name
  const downloadPath = `/api/download/${fileName}`
  const filepath = `static/upload/${fileName}`
	const upStream = fs.createWriteStream(filepath)		// 创建可写流
  reader.pipe(upStream)	// 可读流通过管道写入可写流
	ctx.body ={
    error: false,
    msg: '上传成功',
    path: downloadPath,
    fileName: fileName
  }
}

const download = async (ctx) => {
  const name = ctx.params.name
  const path = `static/upload/${name}`
	ctx.attachment(decodeURI(path))
  await sendfile(ctx, path)
}

module.exports = {
  upload,
  download
}
