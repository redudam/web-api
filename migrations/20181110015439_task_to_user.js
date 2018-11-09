
exports.up = function(knex, Promise) {
    return knex.schema.createTable('task_to_user', function (table) {
        table.integer('task_id').unsigned().notNullable();
        table.foreign('task_id').references('task.id');
        table.integer('user_id').unsigned().notNullable();
        table.foreign('user_id').references('user.id');
    });
};

exports.down = async function(knex, Promise) {
    await knex.schema.table('task_to_user', function (table) {
        table.dropForeign('task_id');
        table.dropForeign('user_id');
    });
    return knex.schema.dropTable('task_to_user');
};
