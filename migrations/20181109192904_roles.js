exports.up = async function (knex, Promise) {
    await knex.schema.createTable('roles', function (table) {
        table.increments('id');
        table.string('role');
    });
    return knex('roles').insert([{role : 'admin'},{role : 'user'}])
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('roles');
};
