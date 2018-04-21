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
    os: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    osVersion: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    manufacturer: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    testerId: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'devices'
  });
};
