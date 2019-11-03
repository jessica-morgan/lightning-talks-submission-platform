import React from 'react'
import { withRouter, Redirect, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getSubmissionsApi } from '../api/submissions'
import { logout } from '../actions/auth'
import Button from '@material-ui/core/Button'

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      submissions: ''
    }
  }

  componentDidMount () {
    getSubmissionsApi()
      .then(submissions => {
        this.setState({
          submissions: submissions
        })
      })
  }

  handleClick = (e) => {
    this.props.dispatch(logout())
  }

  render () {
    if (!this.props.loggedIn) {
      return <Redirect to='/signin' />
    }
    console.log(this.state.submissions)

    return (
      <div>
        <Link to='/'> <Button variant="contained" color="primary" onClick={this.handleClick}>
              Logout
        </Button>
        </Link>
        {/* container for submissions- map over state and render submissions */}
        <Link to='/submit'> <Button variant="contained" color="primary">
              Submit a proposal
        </Button>
        </Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.auth.loggedIn,
    error: state.auth.error
  }
}

export default withRouter(connect(mapStateToProps)(Home))
