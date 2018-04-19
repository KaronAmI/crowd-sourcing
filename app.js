const Koa = require('koa')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const user = require('./server/actions/user.js')

const app = new Koa()
const router = new Router()

app.use(bodyParser())
router.get('/crowd-sourcing/users', user.getUsers)
router.get('/crowd-sourcing/users/:name', user.getUserByName)
router.post('/crowd-sourcing/users/addUser', user.addUser)

app.use(router.routes()) 

app.listen(3000, () => {
  console.log('koa is listening in 3000')
})
