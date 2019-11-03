import React from 'react'
import { withRouter, Redirect, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import { logout } from '../actions/auth'
import Grid from '@material-ui/core/Grid'

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
        <header style={{ background: '#afafaf', height: '8.5vh', marginBottom: '6vh', opacity: '0.8' }}>
          <Link to='/' style={{ textDecoration: 'none', marginTop: '1vh' }}> <Button variant="contained" style={{ backgroundColor: 'white', color: 'black', marginTop: '1.5vh', marginLeft: '92vw' }} onClick={this.handleClick}>
              Logout
          </Button>
          </Link>

        </header>
        {this.props.submissionError ? <Grid container direction="column" alignItems="center" style={{ margin: 'auto' }}>
          <h2 style={{ color: 'black', marginBottom: '3vh', fontWeight: 'lighter', fontSize: '3vh' }}>This topic has already been submitted, please choose another one</h2>
          <Link to="/" style={{ textDecoration: 'none' }}> <Button variant="contained" style={{ backgroundColor: 'white', color: 'black' }}>Return home</Button>
          </Link>
        </Grid> : <Grid container direction="column" alignItems="center" style={{ margin: 'auto' }}>
          <h2 style={{ color: 'black', marginBottom: '3vh', fontWeight: 'lighter', fontSize: '3vh' }}>Thank you, your proposal has successfully been submitted</h2>
          <Link to="/" style={{ textDecoration: 'none' }}> <Button variant="contained" style={{ backgroundColor: 'white', color: 'black' }}>Return home</Button>
          </Link>
        </Grid>
        }

      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    userId: state.auth.userId,
    loggedIn: state.auth.loggedIn,
    submissionError: state.submissions.error
  }
}

export default withRouter(connect(mapStateToProps)(SubmissionConfirmation))
