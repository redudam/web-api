/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('taskToUser', {
    taskId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'task',
        key: 'id'
      },
      field: 'task_id'
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      },
      field: 'user_id'
    }
  }, {
    tableName: 'task_to_user'
  });
};
