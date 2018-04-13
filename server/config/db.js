const Sequelize = require('sequelize')

const cs = new Sequelize('cs', 'root', '123456', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  define: {
    timestamps: false
  }
})

module.exports = {
  cs // 将Todolist暴露出接口方便Model调用
}
