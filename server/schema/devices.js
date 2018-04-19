/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('devices', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    version: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    manufacturer: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    tableName: 'devices'
  });
};
