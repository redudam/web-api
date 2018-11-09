
exports.up = function(knex, Promise) {
    return knex.schema.createTable('tasks', function (table) {
        table.increments('id');
        table.string('name').notNullable();
        table.string('description').notNullable();
        table.string('type').nullable();
        table.integer('duration').nullable();
        table.datetime('time').notNullable();
        table.integer('owner_id').unsigned().nullable();
        table.foreign('owner_id').references('users.id');
        table.double('latitude').notNullable();
        table.double('longitude').notNullable();
        table.integer('status').unsigned().notNullable();
        table.foreign('status').references('task_status.id');
        table.integer('assignee_id').unsigned().nullable();
        table.foreign('assignee_id').references('users.id');
        table.timestamps();
    })
};

exports.down = async function(knex, Promise) {
    await knex.schema.table('tasks', function (table) {
        table.dropForeign('owner_id');
        table.dropForeign('status');
        table.dropForeign('assignee_id');
    });
    return knex.schema.dropTable('tasks');
};
