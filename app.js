const Koa = require('koa')
const Router = require('koa-router')()
const Auth = require('./server/routes/auth.js')
const app = new Koa()

// koa.use('/auth', auth.routes())
// app.use(koa.routes()) // 将路由规则挂载到Koa上。

app.listen(3000,() => {
  console.log('Koa is listening in 8889')
})
