/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rewards', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    projectId: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    grade: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    reward: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'rewards'
  });
};
