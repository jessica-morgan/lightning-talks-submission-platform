import React from 'react'
import {Route, Switch, withRouter, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import Signin from './Signin'
import Home from './Home'

class App extends React.Component {
  componentDidMount () {
    this.props.dispatch(getEmotions())
  }

  render () {
    return (
      <div>
          <Route exact path='/' component={Home} />
          <Route path='/signin' component={Signin} />
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
