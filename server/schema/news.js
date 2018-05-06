/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('news', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    content: {
      type: DataTypes.JSON,
      allowNull: true
    },
    userId: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'news'
  });
};
