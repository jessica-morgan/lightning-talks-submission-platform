import { combineReducers } from 'redux'

import auth from './auth'
import submissions from './submissions'

export default combineReducers({
  auth,
  submissions
})
