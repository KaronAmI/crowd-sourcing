/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(256),
      allowNull: true
    }
  }, {
    tableName: 'user'
  });
};
