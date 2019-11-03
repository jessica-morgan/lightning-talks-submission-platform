import React from 'react'
import { Redirect, Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { signin } from '../actions/auth'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

class Signin extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    const user = this.state
    this.props.dispatch(signin(user))
    e.preventDefault()
  }

  render () {
    if (this.props.loggedIn) {
      return <Redirect to='/home' />
    }

    return (
      <div>
        <form>
          <Grid container direction="column" justify="center" alignItems="center" style={{ background: 'rgb(210, 210, 210)', borderRadius: '0.5vw', width: '30vw', height: '70vh', margin: 'auto', opacity: '0.8', marginTop: '13vh' }}>
            <h3 style={{ color: 'black', fontWeight: 'lighter', fontSize: '2.5vh' }}>Please sign in </h3>
            <TextField
              style={{ background: 'white', borderRadius: '0.5vw' }}
              label="email"
              margin="normal"
              name="email"
              variant="outlined"
              onChange={this.handleChange}></TextField>
            <TextField
              style={{ background: 'white', borderRadius: '0.5vw' }}
              label="password"
              margin="normal"
              name="password"
              variant="outlined"
              type="password"
              onChange={this.handleChange} ></TextField>
            <Button variant="contained" style={{ backgroundColor: 'white', color: 'black', marginBottom: '2vh' }} onClick={this.handleSubmit}>
              Login
            </Button>
            {this.props.error ? <p style={{ color: 'black', marginBottom: '3vh' }}>Incorrect login details, please try again</p> : <div></div>}
            <h3 style={{ color: 'black', fontWeight: 'lighter', fontSize: '2.5vh' }}>Don't have an account? </h3>
            <Link to='/register' style={{ textDecoration: 'none' }}><Button variant="contained" style={{ backgroundColor: 'white', color: 'black' }} >
              Register
            </Button>
            </Link>
          </Grid>
        </form>
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

export default withRouter(connect(mapStateToProps)(Signin))
