exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('members').del()
    .then(function () {
      // Inserts seed entries
      return knex('members').insert([
        { id: 1, email: 'testmember@test.com', hash: '' }
      ])
    })
}
