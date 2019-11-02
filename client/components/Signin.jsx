import React from 'react'
import {Redirect, Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {signin} from '../actions/auth'
import Grid from '@material-ui/core/Grid'

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = (e) => {
    const {name, value} = e.target
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
      return <Redirect to='/' />
    }

    const {email, password} = this.state
    return (
        <div>
          <form>
          <Grid container direction="column" justify="center" alignItems="center">
            Hello
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

export default withRouter(connect(mapStateToProps)(Login))
