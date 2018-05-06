const news = require('../models/news.js')

const addNews = async function (ctx) {
  const send = ctx.request.body
  ctx.body = await news.addNews(send)
}
const getNewsByUserId = async function (ctx) {
  const send = ctx.request.body
  ctx.body = await news.getNewsByUserId(send)
}
const delNews = async (ctx) => {
  const send = ctx.request.body
  const existingNews = await news.delNews(send)
  existingNews.destroy()
  ctx.body = {
    error: false,
    msg: '删除成功'
  }
}
module.exports = {
  addNews,
  getNewsByUserId,
  delNews
}
