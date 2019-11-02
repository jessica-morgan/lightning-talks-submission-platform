exports.up = function (knex) {
  return knex.schema.createTable('submissions', table => {
    table.increments('id').primary()
    table.string('email').unique()
    table.string('topic')
    table.string('synopsis')
    table.timestamp('submission_time')
    table.string('lightning_talk_date')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('submissions')
}