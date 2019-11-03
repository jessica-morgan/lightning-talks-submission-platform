import React from 'react'
import { Route } from 'react-router-dom'
import Signin from './Signin'
import SubmissionsRecord from './SubmissionRecord'
import Register from './Register'
import SubmissionForm from './SubmissionForm'
import SubmissionComfirmation from './SubmissionComfirmation'

const App = () => {
  return (
    <div>
      <Route exact path='/' component={Signin} />
      <Route path='/home' component={SubmissionsRecord} />
      <Route path='/register' component={Register} />
      <Route path='/submit' component={SubmissionForm} />
      <Route path='/submitsuccess' component={SubmissionComfirmation} />
    </div>
  )
}

export default App
