/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('applications', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    projectId: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    testerId: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    auditTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    isPass: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    isSettle: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    }
  }, {
    tableName: 'applications'
  });
};
