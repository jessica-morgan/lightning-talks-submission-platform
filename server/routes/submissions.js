const express = require('express')
const db = require('../db/submissions')
const router = express.Router()

router.get('/all', (req, res) => {
  db.getSubmissions()
    .then(submissions => {
      res.json(submissions)
    })
    .catch(err => {
      res.status(500).send(err)
    })
})

router.post('/new', (req, res) => {
  db.newSubmission(req.body)
    .then(newSubmission => {
      res.json(newSubmission)
    })
    .catch(err => {
      res.status(500).send(err)
    })
})

module.exports = router
