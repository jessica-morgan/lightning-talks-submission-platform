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

export const newSubmissionApi = (submission) => {
  return request
    .post(`${url}/new`)
    .send(submission)
    .then(res => res.body)
    .catch(err => {
      if (err) throw Error('Cannot post submission')
    })
}
