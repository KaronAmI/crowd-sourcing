/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('projects', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    customerId: {
      type: DataTypes.INTEGER(11),
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
    reward: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    device: {
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
    testerNumber: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    isExamine: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    }
  }, {
    tableName: 'projects'
  });
};
