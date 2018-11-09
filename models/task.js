/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    let task = sequelize.define('task', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'id'
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'name'
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'description'
        },
        type: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'type'
        },
        duration: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'duration'
        },
        time: {
            type: DataTypes.DATE,
            allowNull: false,
            field: 'time'
        },
        ownerId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'organization',
                key: 'id'
            },
            field: 'owner_id'
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
        status: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'task_status',
                key: 'id'
            },
            field: 'status'
        },
        assigneeId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'user',
                key: 'id'
            },
            field: 'assignee_id'
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'created_at'
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'updated_at'
        }
    }, {
        tableName: 'task'
    });

    task.associate = (models) => {
        task.belongsTo(models.organization, { as: 'organization', foreignKey: 'ownerId' });
        task.belongsTo(models.user, { as: 'assignee', foreignKey: 'assigneeId' });
        task.belongsTo(models.taskStatus, { as: 'taskStatus', foreignKey: 'status' });
        task.hasMany(models.taskPhoto, { as: 'photos', foreignKey: 'taskId' });
    };
    return task;
};
