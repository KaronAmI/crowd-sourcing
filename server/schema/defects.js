/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('defects', {
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
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    grade: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    isCommit: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    }
  }, {
    tableName: 'defects'
  });
};
