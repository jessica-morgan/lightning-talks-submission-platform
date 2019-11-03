import React from 'react'
import { withRouter, Redirect, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getSubmissionsApi } from '../api/submissions'
import { logout } from '../actions/auth'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

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

    return (
      <div>
        <header style={{ background: '#afafaf', height: '8.5vh', marginBottom: '6vh', opacity: '0.8' }}>
          <Link to='/submit' style={{ textDecoration: 'none', marginTop: '5vh' }}> <Button variant="contained" style={{ backgroundColor: 'white', color: 'black', marginTop: '1.5vh', marginRight: '1vw', marginLeft: '77vw' }}>
              Submit a proposal
          </Button>
          </Link>
          <Link to='/' style={{ textDecoration: 'none', marginTop: '1vh' }}> <Button variant="contained" style={{ backgroundColor: 'white', color: 'black', marginTop: '1.5vh' }} onClick={this.handleClick}>
              Logout
          </Button>
          </Link>

        </header>
        <Grid container direction="column" style={{ margin: 'auto' }}>
          <h2 style={{ color: 'black', marginBottom: '3vh', marginLeft: '25.5vw', fontWeight: 'lighter', fontSize: '3vh' }}>Proposals submitted for Tuesday December 3rd</h2>
        </Grid>
        <Grid container direction="row" alignItems="center" style={{ background: 'rgb(210, 210, 210)', margin: 'auto', height: '65vh', borderRadius: '0.5vw', width: '50vw', overflow: 'scroll', opacity: '0.8' }}>
          {this.state.submissions ? this.state.submissions.map(submission => {
            return <Container key={submission.id} maxWidth="sm">
              <h3 style={{ fontSize: '2.5vh', fontWeight: 'lighter' }}>{submission.topic}</h3>
              <p style={{ fontSize: '2.3vh' }}>{submission.synopsis}</p>
              <hr/>
            </Container>
          })
            : <Container maxWidth="sm">
            </Container>
          }
        </Grid>
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
