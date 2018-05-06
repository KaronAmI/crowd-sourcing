const Koa = require('koa')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const user = require('./server/actions/user.js')
const userModel = require('./server/models/user.js')
const device = require('./server/actions/device.js')
const deviceModel = require('./server/models/device')
const project = require('./server/actions/project.js')
const reward = require('./server/actions/reward.js')
const news = require('./server/actions/news.js')
const newsModel = require('./server/models/news.js')
const application = require('./server/actions/application.js')
const defect = require('./server/actions/defect.js')
const file = require('./server/actions/file.js')

const app = new Koa()
const server = require('http').createServer(app.callback())
const io = require('socket.io')(server)

const koaBody = require('koa-body')

const router = new Router({
  prefix: '/api'
})

// app.use(bodyParser())

app.use(koaBody({
  multipart: true,
  formidable: {
      maxFileSize: 200*1024*1024	// 设置上传文件大小最大限制，默认2M
  }
}))

router.get('/users', user.getUsers)
router.post('/users/login', user.getUserByEmail)
router.post('/users/register', user.addUser)
router.post('/users/updateIntegralByUserId', user.updateIntegralByUserId)
router.post('/users/getUserInfoByEmail', user.getUserInfoByEmail)

router.post('/devices/addDevice', device.addDevice)
router.post('/devices/deviceForTester', device.getDeviceByTesterId)
router.post('/devices/delDeviceByDeviceId', device.delDeviceByDeviceId)

router.get('/project/publishProjects', project.publishProjects)
router.post('/project/publish', project.publish)
router.post('/project/addProject', project.addProject)
router.post('/project/getProjectsByCustomerId', project.getProjectsByCustomerId)
router.post('/project/getProjectByProjectId', project.getProjectByProjectId)
router.post('/project/updateProjectById', project.updateProjectById)
router.post('/project/updateProjectAppsrcById', project.updateProjectAppsrcById)
router.post('/project/delProjectByProjectId', project.delProjectByProjectId)
router.post('/project/searchProjects', project.searchProjects)

router.post('/reward/addReward', reward.addReward)
router.post('/reward/delReward', reward.delReward)
router.post('/reward/getRewardsByProjectId', reward.getRewardsByProjectId)

router.post('/application/addApplication', application.addApplication)
router.post('/application/delApplication', application.delApplication)
router.post('/application/updateApplication', application.updateApplicationById)
router.post('/application/updateApplicationBySettle', application.updateApplicationBySettle)
router.post('/application/getApplicationsForTester', application.getApplicationsForTester)
router.post('/application/getApplicationsForProject', application.getApplicationsForProject)

router.post('/defect/addDefect', defect.addDefect)
router.post('/defect/getDefects', defect.getDefects)
router.post('/defect/updateDefectById', defect.updateDefectById)
router.post('/defect/getDefectsByCustomer', defect.getDefectsByCustomer)
router.post('/defect/commit', defect.commit)
router.post('/defect/delDefect', defect.delDefect)
router.post('/defect/getDefectsByReport', defect.getDefectsByReport)
router.post('/defect/getDefectsBySettle', defect.getDefectsBySettle)

router.post('/news/addNews', news.addNews)
router.post('/news/delNews', news.delNews)
router.post('/news/getNewsByUserId', news.getNewsByUserId)

router.post('/upload', file.upload)
router.get('/download/:name', file.download)

app.use(router.routes())

const socketsInfo = {}
const findTopTwenty = (user, socket) => {
  socketsInfo[user.id] = socket.id
  return socketsInfo
}

io.sockets.on('connection', (socket) => {
  let socketKeys = {}
  let socketCut = []
  socket.on('login', async (user) => {
    socketKeys = findTopTwenty(user, socket)
  })

  socket.on('publish', async (project) => {
    const users = await userModel.getUsers()
    const num = project.testerNumber * 2
    let index = 0
    for (let user of users) {
      const id = user.dataValues.id
      const send = {}
      send.testerId = id
      const devices = await deviceModel.getDeviceByTesterId(send)
      for (let d of devices) {
        if (d.os === project.os &&
          d.osVersion === project.osVersion &&
          d.name === project.phoneName && index < num) {
            const key = socketKeys[id]
            if (key) {
              const curSocket = io.sockets.sockets[key]
              curSocket && curSocket.emit('projects', project)
            }
            const obj = {}
            obj.userId = id
            obj.content = JSON.stringify(project)
            await newsModel.addNews(obj)
            index += 1
          }
      }
    }
  })
})

server.listen(3000, () => {
  console.log('koa is listening in 3000')
})
