const connection = require('./index')

module.exports = {
  newSubmission,
  getSubmissions
}

function newSubmission (submission, db = connection) {
  return db('submissions')
    .insert({
      user_id: Number(submission.userId),
      user_email: submission.email,
      topic: submission.topic,
      synopsis: submission.synopsis,
      submission_time: submission.submission_time,
      lightning_talk_date: submission.lightning_talk_date
    })
}

function getSubmissions (db = connection) {
  return db('submissions')
    .select()
    .orderBy('submission_time', 'desc')
}
