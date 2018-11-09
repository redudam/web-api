
exports.up = function(knex, Promise) {
    return knex.schema.createTable('task_photo', function (table) {
        table.integer('task_id').unsigned().notNullable();
        table.foreign('task_id').references('task.id');
        table.string('photo_content').notNullable();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('task_photo');
};
