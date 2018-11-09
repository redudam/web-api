// Update with your config settings.

module.exports = {

    client: 'postgresql',
    connection: {
        host: '95.213.28.116',
        database: 'happytail',
        user: 'happytail_man',
        password: 'happytail_pass',
        port : '5432'
    },
    pool: {
        min: 2,
        max: 10
    },
    migrations: {
        tableName: 'knex_migrations'
    }

};
