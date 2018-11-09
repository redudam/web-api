/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
    let task_photo = sequelize.define('taskPhoto', {
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
    task_photo.associate = (models) => {
        task_photo.hasOne(models.organization, { as: 'organization', foreignKey: 'ownerId' });
    };
    return task_photo;
};
