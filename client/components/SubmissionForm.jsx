import React from 'react'
import { withRouter, Redirect, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { newSubmissionApi } from '../api/submissions'
import { logout } from '../actions/auth'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'

class SubmissionForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      userId: this.props.userId,
      topic: '',
      synopsis: '',
      email: '',
      time: ''
    }
  }

  handleClick = (e) => {
    this.props.dispatch(logout())
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = () => {
    newSubmissionApi(this.state)
  }

  render () {
    if (!this.props.loggedIn) {
      return <Redirect to='/signin' />
    }

    const regex = /\s+/gi

    return (
      <div>
        <header style={{ background: '#afafaf', height: '8.5vh', marginBottom: '6vh', opacity: '0.8' }}>
          <Link to='/' style={{ textDecoration: 'none', marginTop: '5vh' }}> <Button variant="contained" style={{ backgroundColor: 'white', color: 'black', marginTop: '1.5vh', marginRight: '1vw', marginLeft: '85vw' }}>
              Home
          </Button>
          </Link>
          <Link to='/' style={{ textDecoration: 'none', marginTop: '1vh' }}> <Button variant="contained" style={{ backgroundColor: 'white', color: 'black', marginTop: '1.5vh' }} onClick={this.handleClick}>
              Logout
          </Button>
          </Link>

        </header>
        <div>
          <h2 style={{ color: 'black', textAlign: 'center', fontWeight: 'lighter', fontSize: '3vh' }}>Submit a proposal for December 2019</h2>
        </div>
        <div style={{ background: 'rgb(210, 210, 210)', margin: 'auto', borderRadius: '0.5vw', opacity: '0.8', width: '37vw', height: '50vh' }}>
          <Grid container direction="column" alignItems="center" >
            <FormControl style={{ width: '35vw' }} >
              <TextField
                style={{ background: 'white', borderRadius: '0.5vw' }}
                label="email"
                margin="normal"
                name="email"
                variant="outlined"
                value={this.state.email}
                onChange={this.handleChange}></TextField>
            </FormControl>
            <FormControl style={{ width: '35vw' }}>
              <InputLabel style={{ paddingLeft: '1vw' }}> time</InputLabel>
              <Select
                style={{ background: 'white', borderRadius: '0.5vw' }}
                label="time"
                name="time"
                variant="outlined"
                value={this.state.time}
                onChange={this.handleChange}
              >
                <MenuItem value="">
                  {this.state.time.length ? <p>{this.state.time}</p> : <em>Please select a time</em> }
                </MenuItem>
                <MenuItem value={'10.00am'} >10.00am</MenuItem>
                <MenuItem value={'11.00am'} >11.00am</MenuItem>
                <MenuItem value={'02.00pm'} >2.00pm</MenuItem>
                <MenuItem value={'03.00pm'} >3.00pm</MenuItem>
                <MenuItem value={'04.00pm'} >4.00pm</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid container direction="column" justify="center" alignItems="center">
            <FormControl style={{ width: '35vw' }}>
              <TextField
                style={{ background: 'white', borderRadius: '0.5vw' }}
                inputProps={{
                  maxLength: 80
                }}
                label="topic"
                margin="normal"
                name="topic"
                variant="outlined"
                onChange={this.handleChange}></TextField>
            </FormControl >
            <FormControl style={{ width: '35vw' }} >
              <TextField
                style={{ background: 'white', borderRadius: '0.5vw' }}
                label="synopsis"
                margin="normal"
                name="synopsis"
                variant="outlined"
                onChange={ this.handleChange }></TextField>
            </FormControl >
            {this.state.synopsis.trim().replace(regex, ' ').split(' ').length <= 120
              ? <p></p>
              : <p>you have exceeded the word limit</p>
            }
            {this.state.email.length && this.state.time.length && this.state.topic.length && this.state.synopsis.length
              ? <Link to='/submitsuccess'> <Button style={{ float: 'right', marginTop: '2vh', backgroundColor: 'lightGray', color: 'black' }} variant="contained" onClick={() => this.handleSubmit()}>
              Submit
              </Button>
              </Link>
              : <div style={{ float: 'right', marginTop: '2vh' }}></div>
            }
          </Grid>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.auth.loggedIn,
    error: state.auth.error,
    userId: state.auth.userId
  }
}

export default withRouter(connect(mapStateToProps)(SubmissionForm))
