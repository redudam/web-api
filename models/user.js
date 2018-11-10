/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    const user = sequelize.define('user', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'id'
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'email'
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'password'
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'phone'
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'firstName'
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'lastName'
        },
        organizationId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'organization',
                key: 'id'
            },
            field: 'organization_id'
        },
        latitude: {
            type: DataTypes.DOUBLE,
            allowNull: true,
            field: 'latitude'
        },
        longitude: {
            type: DataTypes.DOUBLE,
            allowNull: true,
            field: 'longitude'
        },
        rating: {
            type: DataTypes.DOUBLE,
            allowNull: true,
            field: 'rating'
        },
        role: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'role',
                key: 'id'
            },
            field: 'role'
        },
        photoContent: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'photo_content'
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
        tableName: 'user'
    });

    user.associate = (models) => {
        user.belongsTo(models.organization, { as: 'organization', foreignKey: 'organizationId' });
        user.hasMany(models.task, { as: 'tasks', foreignKey: 'assigneeId' });
    };


    return user;
};
