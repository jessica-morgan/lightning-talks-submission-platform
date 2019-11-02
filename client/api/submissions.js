import request from 'superagent'
import {getToken} from '../utils/tokens'

const url = 'http://localhost:3000/api/v1/submissions'

export function getSubmissionsApi () {
  return request
    .get(`${url}/all`)
    .set({Authorization: `Bearer ${getToken()}`})    
    .then(res => res.body)
    .catch(err => {
      if (err) throw Error('Cannot get submissions')
    })
}

export const newSubmissionApi = (submission) => {
  return request
    .post(`${url}/new`)
    .set({Authorization: `Bearer ${getToken()}`})
    .send(submission)
    .then(res => res.body)
    .catch(err => {
      if (err) throw Error('Cannot post submission')
    })
}

