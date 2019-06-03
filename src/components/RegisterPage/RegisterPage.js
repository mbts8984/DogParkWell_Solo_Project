import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Grid, Card, FormControl, CardActions, Button, Typography, TextField, MenuItem, FormLabel} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import './RegisterPage.css';

const styles = {
  root: {
    flexGrow: 1,
    justify: 'center',
    padding: '30px',
  },
  headDiv: {
      //backgroundColor: '#282c34',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justify: 'center',
      alignContent: 'center',
      fontSize: `calc(10px + 2vmin)`,
      //color: 'white'
  },
  regFormItem: {
    flexDirection: 'column',
    alignItems: 'center',
    justify: 'center',
    alignContent: 'center',

  }
   
};



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

  componentDidMount(){
    this.props.dispatch({ type: 'FETCH_PARKS'})
  }

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
    //console.log('in registerUser with dogpark data: ', this.state.homeDogPark.key)
    
    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'REGISTER',
        payload: {
          username: this.state.username,
          password: this.state.password,
          human_name: this.state.humanName,
          email: this.state.email,
          phone: this.state.phoneNumber,
          preferred_contact_method: this.state.preferredContactMethod,
          home_dog_park_id: this.state.homeDogPark
          
        },
      })
     // this.props.history.push('/dogForm');
    } else {
      this.props.dispatch({type: 'REGISTRATION_INPUT_ERROR'});
    }
  } // end registerUser

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  };


  render() {
    const {classes} = this.props;
    
    console.log('in handleInputChangeFor with dogpark data:', this.state.homeDogPark)

    //console.log('HERE IS THE DOG PARK DATA YOU REQUESTED', this.props.reduxState)
    return (
      <>
    <Grid container justify="center" className={classes.root} spacing={3}>
      <Grid item className={classes.headDiv} spacing={3}>
       <Typography className="welcomeHeader" variant="h2" component="h1">Welcome To Dog Park Well</Typography>
       <Typography className="welcomeHeader" variant="h6" component="h1">Create Your Account To Start Meeting Up With Fellow Dog Lovers & Pooches!</Typography>
      </Grid>
    {/* </Grid> */}
    
      <div>
        {this.props.errors.registrationMessage && (
          <h2
            className="alert"
            role="alert"
          >
            {this.props.errors.registrationMessage}
          </h2>
        )}
      {/* <Grid container justify="center" className={classes.root} spacing={3}>   */}
      <Card className={classes.root}>
        <FormControl className="registerForm" >
        <Grid item spacing={3} className={classes.regFormItem}>
         <FormLabel variant="h5">Add Your Dog's Information</FormLabel>
        </Grid>
        <Grid item spacing={3} className={classes.regFormItem}>     
          <TextField label="Username"
            value={this.state.username}
            onChange={this.handleInputChangeFor('username')}
            variant="outlined"
            fullWidth
            margin="normal"
            helperText="Required"
            >
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
          
          </Grid>
          {/* End username input */}
          {/* Password input */}
          <Grid item className={classes.regFormItem} >
            <TextField label="Password"
            value={this.state.password}
            onChange={this.handleInputChangeFor('password')}
            variant="outlined"
            fullWidth
            type = "password"
            helperText="Required"
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
          </Grid>
          {/* end Password input */}
          {/* Human Name Input */}
          <Grid item spacing={3} className={classes.regFormItem}>
            <TextField label="Human Name"
            value={this.state.humanName}
            onChange={this.handleInputChangeFor('humanName')}
            variant="outlined"
            fullWidth
            helperText="Required"
            margin="normal"
            ></TextField>
          </Grid>
          {/* End Human Name input */}
          {/* Email input area */}
          <Grid item spacing={3} className={classes.regFormItem}>
            <TextField label="Email"
              value={this.state.email}
              onChange={this.handleInputChangeFor('email')}
              variant="outlined"
              fullWidth
              helperText="Required"
              margin="normal"
            ></TextField>
          </Grid>
          {/* End Email Input */}
          {/* Phone number input */}
          <Grid item spacing={3} className={classes.regFormItem}>
            <TextField label="Phone Number"
            type="number"
            value={this.state.phoneNumber}
            onChange={this.handleInputChangeFor('phoneNumber')}
            variant="outlined"
            fullWidth
            helperText="Required"
            margin="normal"
            ></TextField>
          </Grid>
          {/* end phone number input */}
          {/* Preferred Contact Method Dropdown */}
          <Grid item spacing={3} className={classes.regFormItem}> 
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
          </Grid>
            {/* end Preferred contact method dropdown */}
            {/* Home Dog Park dropdown mapping over the options in the 'dog park' table in DB */}
          <Grid item spacing={3} className={classes.regFormItem}>
            <TextField select
            label="Home Dog Park"
            value={this.state.homeDogPark}
            fullWidth
            variant="outlined"
            margin="normal"
            onChange={this.handleInputChangeFor('homeDogPark')}
            helperText="Select the dog park that you visit the most frequently"
            >
              {this.props.dogPark.map(option => (
          <MenuItem key={option.id} value={option.id}>
            {option.dog_park}
          </MenuItem>))} 
          </TextField>
          {/* <select label="Home Dog Park"value={this.state.homeDogPark} onChange={this.handleInputChangeFor('homeDogPark')}>
            {this.props.reduxState.map(park => {
              <option key={park.id} value={park.id}>{park.dog_park}</option>
            })}
          </select> */}
          </Grid>
          {/* end Home Dog Park Drop Down */}
          <Grid item spacing={3} className={classes.regFormItem}>
            <input
              className="register"
              type="submit"
              name="submit"
              value="Register"
            />
          </Grid>
        <Grid  item spacing={3} className={classes.regFormItem}>
        <CardActions>
          <Button className="register" type="submit" name="submit" value="register" variant="outlined" color="primary"  onClick={this.registerUser}>Submit Human Info & Add My Dog</Button>
        </CardActions>
        </Grid>
        </FormControl>
        </Card>
        {/* </Grid> */}
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
      </Grid>
      </>
    );
  }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
  errors: state.errors,
  dogPark: state.dogParkReducer
});

export default withStyles(styles) (connect(mapStateToProps)(RegisterPage));

