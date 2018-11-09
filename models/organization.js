/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('organization', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'name'
    },
    latitude: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      field: 'latitude'
    },
    longitude: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      field: 'longitude'
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'phone'
    }
  }, {
    tableName: 'organization'
  });
};
