const auth = require('../actions/user.js')
const router = require('koa-router')()

router.get('/user/:id', auth.getUserInfo) // 定义url的参数是id,用user的auth方法引入router

module.exports = router
