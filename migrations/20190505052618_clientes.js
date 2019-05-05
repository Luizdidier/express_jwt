
exports.up = function(knex, Promise) {
    return knex.schema.createTable('Clientes', function(t) {
        t.increments('id').unsigned().primary();
        t.string('name').notNull();
        t.string('cnpj').notNull();
        t.string('rua').notNull();
        t.string('numero').notNull();
        t.string('cidade').notNull();
        t.string('estado').notNull();
        t.string('cep').notNull();
        t.string('email');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('Clientes');
};
