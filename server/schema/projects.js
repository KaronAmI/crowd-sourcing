/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('projects', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    customerId: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    releaseTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    start: {
      type: DataTypes.DATE,
      allowNull: true
    },
    end: {
      type: DataTypes.DATE,
      allowNull: true
    },
    isExamine: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    isPublish: {
      type: DataTypes.INTEGER(1),
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
    phoneName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    testerNumber: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    appsrc: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    fileName: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'projects'
  });
};
