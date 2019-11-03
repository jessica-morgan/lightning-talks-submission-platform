exports.up = function (knex) {
  return knex.schema.createTable('submissions', table => {
    table.increments('id').primary()
    table.string('user_id').unique().references('members.id')
    table.string('topic')
    table.string('synopsis')
    table.string('submission_time')
    table.string('lightning_talk_date')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('submissions')
}
