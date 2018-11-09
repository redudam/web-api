/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('roles', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    role: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'role'
    }
  }, {
    tableName: 'roles'
  });
};
