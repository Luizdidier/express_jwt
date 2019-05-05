
exports.up = function(knex, Promise) {
    return knex.schema.createTable('Users', function(t) {
        t.increments('id').unsigned().primary();
        t.string('name').notNull();
        t.string('email').notNull();
        t.string('password').notNull();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('products');
};
