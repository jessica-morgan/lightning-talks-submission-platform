const sodium = require('libsodium-wrappers')

module.exports = {
  generateHash,
  verify
}

function generateHash (password) {
  return sodium.ready.then(() =>
    sodium.crypto_pwhash_str(
      password,
      sodium.crypto_pwhash_OPSLIMIT_INTERACTIVE,
      sodium.crypto_pwhash_MEMLIMIT_MIN
    )
  )
}

function verify (hash, password) {
  return sodium.ready.then(() =>
    sodium.crypto_pwhash_str_verify(hash, password))
}
