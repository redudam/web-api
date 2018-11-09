
exports.up = function(knex, Promise) {
    return knex.schema.createTable('task_photos', function (table) {
        table.integer('task_id').unsigned().notNullable();
        table.foreign('task_id').references('tasks.id');
        table.string('url').notNullable();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('task_photos');
};
