import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Card, CardActions, Button, Typography, TextField, MenuItem} from '@material-ui/core';
import './RegisterPage.css';

class RegisterPage extends Component {
  state = {
    username: '',
    password: '',
    humanName: '',
    email: '',
    phoneNumber:'',
    preferredContactMethod:'',
    homeDogPark:''
  };


  contactMethods = [
  {
    value: 'Email',
  },
  {
    value: 'Text',
  },
  {
    value: 'Either',
  }
];

  registerUser = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'REGISTER',
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({type: 'REGISTRATION_INPUT_ERROR'});
    }
  } // end registerUser

  handleInputChangeFor = propertyName => (event) => {
   console.log(this.state.humanName)
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    return (
      <>
       <Typography className="welcomeHeader" variant="h2" component="h1">Welcome To Dog Park Well</Typography>
       <Typography className="welcomeHeader" variant="h6" component="h1">Create Your Account To Start Meeting Up With Fellow Dog Lovers & Pooches!</Typography>
      
      <div>
        {this.props.errors.registrationMessage && (
          <h2
            className="alert"
            role="alert"
          >
            {this.props.errors.registrationMessage}
          </h2>
        )}
      {/* <Card className="registerCard"> */}
        <form className="registerForm" onSubmit={this.registerUser}>
    
          <Typography variant="h5" component="h4">Add Your Human Information</Typography>
          <div>
          <TextField label="Username"
            value={this.state.username}
            onChange={this.handleInputChangeFor('username')}
            variant="outlined"
            fullWidth
            margin="normal">
          </TextField>
            {/* <label htmlFor="username">
              Username:
              <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChangeFor('username')}
              />
            </label> */}
          </div>
          {/* End username input */}
          {/* Password input */}
          <div>
            <TextField label="Password"
            value={this.state.password}
            onChange={this.handleInputChangeFor('password')}
            variant="outlined"
            fullWidth
            margin="normal">
          </TextField>
            {/* <label htmlFor="password">
              Password:
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChangeFor('password')}
              />
            </label> */}
          </div>
          {/* end Password input */}
          {/* Human Name Input */}
          <div>
            <TextField label="Human Name"
            value={this.state.humanName}
            onChange={this.handleInputChangeFor('humanName')}
            variant="outlined"
            fullWidth
            margin="normal"
            ></TextField>
          </div>
          {/* End Human Name input */}
          {/* Email input area */}
          <div>
            <TextField label="Email"
              value={this.state.email}
              onChange={this.handleInputChangeFor('email')}
              variant="outlined"
              fullWidth
              margin="normal"
            ></TextField>
          </div>
          {/* End Email Input */}
          {/* Phone number input */}
          <div>
            <TextField label="Phone Number"
            type="number"
            value={this.state.phoneNumber}
            onChange={this.handleInputChangeFor('phoneNumber')}
            variant="outlined"
            fullWidth
            margin="normal"
            ></TextField>
          </div>
          {/* end phone number input */}
          {/* Preferred Contact Method Dropdown */}
          <div> 
            <TextField select
            label="Preferred Contact Method"
            value={this.state.preferredContactMethod}
            fullWidth
            variant="outlined"
            margin="normal"
            onChange={this.handleInputChangeFor('preferredContactMethod')}
            helperText="Please Select How You Prefer To Receive Notifications"
            >
              {this.contactMethods.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.value}
          </MenuItem>))}
          </TextField>
          </div>
            {/* end Preferred contact method dropdown */}
            {/* Home Dog Park dropdown mapping over the options in the 'dog park' table in DB */}
          <div>
            <TextField select
            label="Home Dog Park"
            value={this.state.homeDogPark}
            fullWidth
            variant="outlined"
            margin="normal"
            onChange={this.handleInputChangeFor('homeDogPark')}
            helperText="Select the dog park that you visit the most frequently"
            >
              {this.props.reduxState.map(option => (
          <MenuItem key={option.id} value={option.dog_park}>
            {option.dog_park}
          </MenuItem>))} 

            </TextField>

          </div>
          {/* end Home Dog Park Drop Down */}
          <div>
            <input
              className="register"
              type="submit"
              name="submit"
              value="Register"
            />
          </div>
        <CardActions>
          <Button className="register" type="submit" name="submit" value="register" variant="outlined" color="primary">Add My Dog</Button>
        </CardActions>
        </form>


        {/* </Card> */}
        <center>
          <button
            type="button"
            className="link-button"
            onClick={() => {this.props.dispatch({type: 'SET_TO_LOGIN_MODE'})}}
          >
            Login
          </button>
        </center>
      </div>
      </>
    );
  }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
  errors: state.errors,
  reduxState: state.dogParkReducer
});

export default connect(mapStateToProps)(RegisterPage);

