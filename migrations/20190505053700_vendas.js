
exports.up = function(knex, Promise) {
    return knex.schema.createTable('Vendas', function(t) {
        t.increments('id').unsigned().primary();
        t.bigInteger('cliente_id').unsigned().references('id').inTable('Clientes').notNull();
        t.string('rua').notNull();
        t.string('numero').notNull();
        t.string('cidade').notNull();
        t.string('estado').notNull();
        t.string('cep').notNull();
        t.string('observacao').notNull();
        t.double('valor_total').notNull();
        t.string('prazo').notNull()
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('Vendas');
};
