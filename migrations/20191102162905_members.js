exports.up = function (knex) {
  return knex.schema.createTable('members', table => {
    table.increments('id').primary()
    table.string('email').unique()
    table.string('hash')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('members')
}
