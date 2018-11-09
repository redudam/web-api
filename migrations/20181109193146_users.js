exports.up = function (knex, Promise) {
    return knex.schema.createTable('user', function (table) {
        table.increments('id');
        table.string('email').nullable();
        table.string('password').notNullable();
        table.string('phone').nullable();
        table.string('firstName').notNullable();
        table.string('lastName').notNullable();
        table.integer('organization_id').unsigned().nullable();
        table.foreign('organization_id').references('organization.id')
        table.decimal('latitude').nullable();
        table.decimal('longitude').nullable();
        table.decimal('rating', 2).nullable();
        table.integer('role').unsigned().notNullable();
        table.foreign('role').references('role.id');
        table.string('photo_content').nullable();
        table.timestamps();
    })
};

exports.down = async function (knex, Promise) {
    await knex.schema.table('user', function (table) {
        table.dropForeign('organization_id');
        table.dropForeign('role');
    });
    return knex.schema.dropTable('user');
};
