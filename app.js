const Koa = require('koa')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const user = require('./server/actions/user.js')

const app = new Koa()
const router = new Router()

app.use(bodyParser())
router.get('/api/users', user.getUsers)
router.post('/api/users/login', user.getUserByEmail)
router.post('/api/users/register', user.addUser)

app.use(router.routes())

app.listen(3000, () => {
  console.log('koa is listening in 3000')
})
