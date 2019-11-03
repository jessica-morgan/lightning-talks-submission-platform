import React from 'react'
import { withRouter, Redirect, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import { logout } from '../actions/auth'

class SubmissionConfirmation extends React.Component {
  handleClick = (e) => {
    this.props.dispatch(logout())
  }
  render () {
    if (!this.props.loggedIn) {
      return <Redirect to='/signin' />
    }

    return (
      <div>
        <Link to='/'> <Button variant="contained" color="primary" onClick={this.handleClick}>
              Logout
        </Button>
        </Link>
        <h2>Thank you, your proposal has successfully been submitted</h2>
        <Link to="/"> <h3>Return home</h3></Link>
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

export default withRouter(connect(mapStateToProps)(SubmissionConfirmation))
