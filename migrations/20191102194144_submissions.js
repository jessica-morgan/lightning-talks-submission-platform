exports.up = function (knex) {
  return knex.schema.createTable('submissions', table => {
    table.increments('id').primary()
    table.integer('user_id').references('members.id')
    table.string('user_email').references('members.email')
    table.string('topic')
    table.string('synopsis')
    table.string('submission_time')
    table.string('lightning_talk_date')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('submissions')
}
