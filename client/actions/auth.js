import {setToken} from '../utils/token'
import {setUserId} from '../utils/userId'
import {registerApi, signinApi} from '../api/auth'

// Actions for signing in and registering
export const signinPending = () => {
  return {
    type: 'SIGNIN_PENDING'
  }
}

export const signinSuccess = () => {
  return {
    type: 'SIGNIN_SUCCESS'
  }
}

export const signinError = error => {
  return {
    type: 'SIGNIN_ERROR',
    error
  }
}

export const registerPending = () => {
  return {
    type: 'REGISTER_PENDING'
  }
}

export const registerSuccess = () => {
  return {
    type: 'REGISTER_SUCCESS'
  }
}

export const registerError = error => {
  return {
    type: 'REGISTER_ERROR',
    error
  }
}

export const signin = (member) => dispatch => {
  dispatch(signinPending())
  return signinApi(member)
    .then(res => {
      setToken(res.token)
      setUserId(res.userId)
      dispatch(signinSuccess())
    })
    .catch(err => {
      dispatch(signinError(err))
    })
}

// Register action
export const register = (member) => dispatch => {
  dispatch(registerPending())
  return registerApi(member)
    .then(res => {
      setToken(res.token)
      setUserId(res.userId)
      dispatch(registerSuccess())
    })
    .catch(err => {
      return dispatch(registerError(err))
    })
}

// Log out action
export const logout = () => {
  return {
    type: 'LOGOUT'
  }
}
