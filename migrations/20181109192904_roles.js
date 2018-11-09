exports.up = async function (knex, Promise) {
    await knex.schema.createTable('role', function (table) {
        table.increments('id');
        table.string('role');
    });
    return knex('role').insert([{role : 'admin'},{role : 'user'}])
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('role');
};
