const express = require('express')
const db = require('../db/members')
const router = express.Router()
const token = require('../auth/token')
const hash = require('../auth/hash')

router.post('/register', validateRegister, register, token.issue)
router.post('/signin', validateLogin, checkMember, token.issue)

function validateRegister (req, res, next) {
  const { email, password } = req.body
  if (!email) {
    return next(new Error('No email provided'))
  }
  if (!password) {
    return next(new Error('No password provided'))
  }

  next()
}

function register (req, res, next) {
  db.registerMember(req.body)
    .then((member) => {
      res.locals.userId = member[0]
      next()
    })
    .catch(({ message }) => {
      message.includes('UNIQUE constraint failed: member.email')
        ? registrationError(res, 'member already exists.', 400)
        : registrationError(res, `Something bad happened. We don't know why.`, 500)
    })
}

function validateLogin (req, res, next) {
  const { email, password } = req.body
  if (!email) {
    return next(new Error('No email provided'))
  }
  if (!password) {
    return next(new Error('No password provided'))
  }

  next()
}

function checkMember (req, res, next) {
  db.getMember(req.body)
    .then(member => {
      if (member) res.locals.memberId = member.id
      return member && hash.verify(member.hash, req.body.password)
    })
    .then(isValid => {
      return isValid ? next() : invalidCredentials(res)
    })
    .catch(() => {
      res.status(400).json({
        errorType: 'DATABASE_ERROR'
      })
    })
}

function invalidCredentials (res) {
  res.status(400).json({
    errorType: 'INVALID_CREDENTIALS'
  })
}

function registrationError (res, errorMessage, errorCode) {
  res.status(errorCode).json({
    ok: false,
    message: errorMessage
  })
}

module.exports = router
