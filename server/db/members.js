const connection = require('./index')
const { generateHash } = require('../auth/hash')

module.exports = {
  registerMember,
  getMember
}

function registerMember (member, db = connection) {
  return generateHash(member.password)
    .then(hash => {
      const { email } = member
      return db('members').insert({
        email: email,
        hash: hash
      })
    })
}

function getMember (member, db = connection) {
  return db('members')
    .where({
      email: member.email
    })
    .first()
}
