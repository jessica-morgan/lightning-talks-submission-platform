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

    const { email, password } = this.state
    return (
      <div>
        <form>
          <Grid container direction="column" justify="center" alignItems="center">
            <TextField
              label="email"
              margin="normal"
              name="email"
              variant="outlined"
              onChange={this.handleChange}></TextField>
            <TextField
              label="password"
              margin="normal"
              name="password"
              variant="outlined"
              type="password"
              onChange={this.handleChange} ></TextField>
            <Button variant="contained" color="primary" onClick={this.handleSubmit}>
              Login
            </Button>
            <h3>Don't have an account? </h3>
            <Link to='/register'><Button variant="contained" color="primary" >
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
