exports.seed = function (knex) {
  return knex('members').del()
    .then(function () {
      return knex('members').insert([
        { id: 1, email: 'testuser@test.com', hash: '$argon2id$v=19$m=8,t=2,p=1$WjepFSlq8cfNuFZ0fUZlsg$Hdr+LA6oGQthW4pX0BYUUV0sqWfDU1KblbsL+yJEVJs' }
      ])
    })
}
