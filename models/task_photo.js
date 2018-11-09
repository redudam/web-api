/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('taskPhoto', {
    taskId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'task',
        key: 'id'
      },
      field: 'task_id'
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'url'
    }
  }, {
    tableName: 'task_photo'
  });
};
