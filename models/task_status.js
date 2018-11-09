/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('taskStatus', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'status'
    }
  }, {
    tableName: 'task_status'
  });
};
