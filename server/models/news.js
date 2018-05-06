const db = require('../config/db.js')
const newsModel = '../schema/news.js'
const CsDb = db.cs

const News = CsDb.import(newsModel)

const delNews = async (obj) => {
  return await News.findOne({
    where: {
      id: obj.id
    }
  })
}

const getNewsByUserId = async function (obj) {
  const news = await News.findAll({
    where: {
      userId: obj.userId
    }
  })
  return news
}

const getNewsByContent = async function (obj) {
  return await News.findOne({
    where: {
      userId: obj.userId,
      content: obj.content
    }
  })
}
  
const addNews = async function (obj) {
  // const existingProject = await getNewsByContent(obj)
  // console.log(existingProject)
  // if (!existingProject) {
  return await News.create({
    userId: obj.userId,
    content: obj.content
  })
  // }
}

module.exports = {
  getNewsByUserId,
  addNews,
  delNews
}
