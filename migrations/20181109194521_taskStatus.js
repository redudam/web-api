exports.up = async function (knex, Promise) {
    await knex.schema.createTable('task_status', function (table) {
        table.increments('id');
        table.string('status');
    });
    return knex('task_status').insert([{status: 'available'}, {status: 'in_progress'}, {status: 'hidden'}, {status: 'done'}, {status: 'deleted'}]);
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('task_status');
};
