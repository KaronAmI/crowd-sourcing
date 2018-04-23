const Koa = require('koa')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const user = require('./server/actions/user.js')
const device = require('./server/actions/device.js')
const project = require('./server/actions/project.js')
const reward = require('./server/actions/reward.js')

const app = new Koa()
const router = new Router()

app.use(bodyParser())

router.get('/api/users', user.getUsers)
router.post('/api/users/login', user.getUserByEmail)
router.post('/api/users/register', user.addUser)

router.post('/api/devices/addDevice', device.addDevice)
router.post('/api/devices/deviceForTester', device.getDeviceByTesterId)
router.post('/api/devices/delDeviceByDeviceId', device.delDeviceByDeviceId)

router.post('/api/project/publish', project.publish)
router.post('/api/project/addProject', project.addProject)
router.post('/api/project/getProjectsByCustomerId', project.getProjectsByCustomerId)
router.post('/api/project/updateProjectById', project.updateProjectById)
router.post('/api/project/delProjectByProjectId', project.delProjectByProjectId)

router.post('/api/reward/addReward', reward.addReward)
router.post('/api/reward/delReward', reward.delReward)
router.post('/api/reward/getRewardsByProjectId', reward.getRewardsByProjectId)

app.use(router.routes())

app.listen(3000, () => {
  console.log('koa is listening in 3000')
})
