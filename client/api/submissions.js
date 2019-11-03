import request from 'superagent'

const url = 'http://localhost:3000/api/v1/submissions'

export function getSubmissionsApi () {
  return request
    .get(`${url}/all`)
    .then(res => res.body)
    .catch(err => {
      if (err) throw Error('Cannot get submissions')
    })
}

export function newSubmissionApi (submission) {
  const date = new Date()
  const newSubmission = {
    userId: submission.userId,
    topic: submission.topic,
    synopsis: submission.synopsis,
    email: submission.email,
    lightning_talk_date: submission.time,
    submission_time: date
  }
  return request
    .post(`${url}/new`)
    .send(newSubmission)
    .then(res => res.body)
    .catch(err => {
      if (err) throw Error('Cannot post submission')
    })
}
