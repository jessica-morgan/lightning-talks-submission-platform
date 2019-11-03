import React from 'react'
import { Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Signin from './Signin'
import Home from './Home'
import Register from './Register'

class App extends React.Component {
  render () {
    return (
      <div>
        <Route exact path='/' component={Signin} />
        <Route path='/home' component={Home} />
        <Route path='/register' component={Register} />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    userId: state.auth.userId,
    loggedIn: state.auth.loggedIn
  }
}

export default withRouter(connect(mapStateToProps)(App))
