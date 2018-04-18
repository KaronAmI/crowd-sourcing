const Koa = require('koa')
const Router = require('koa-router')
const user = require('./server/actions/user.js')

const app = new Koa()
const router = new Router()

router.get('/users', user.getUsers)
router.get('/users/:name', user.getUserByName)

app.use(router.routes()) 

app.listen(3000, () => {
  console.log('koa is listening in 3000')
})
