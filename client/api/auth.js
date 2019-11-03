import request from 'superagent'

const url = 'http://localhost:3000/api/v1/auth'

export function registerApi (user) {
  return request
    .post(`${url}/register`)
    .send(user)
    .then(res => res.body)
    .catch(err => {
      if (err) throw Error('Cannot register member')
    })
}

export const signinApi = (user) => {
  return request
    .post(`${url}/signin`)
    .send(user)
    .then(res => res.body)
    .catch(err => {
      if (err) throw Error('Cannot sign in member')
    })
}
