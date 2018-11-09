
exports.up = function(knex, Promise) {
    return knex.schema.createTable('organization', function (table) {
        table.increments('id');
        table.string('name');
        table.double('latitude').notNullable();
        table.double('longitude').notNullable();
        table.string('phone');
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('organization');
};
