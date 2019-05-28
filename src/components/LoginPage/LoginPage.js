import React, { Component } from 'react';
import { connect } from 'react-redux';
import  {TextField, Card, Button} from '@material-ui/core';
import './LoginPage.css';

class LoginPage extends Component {
  state = {
    username: '',
    password: '',
  };

  login = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'LOGIN',
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  } // end login

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    return (
      <div className="loginBigDiv">
        <img src="./Images/littleblue.jpeg" alt="little blue Dane"/>
        {this.props.errors.loginMessage && (
          <h2
            className="alert"
            role="alert"
          >
            {this.props.errors.loginMessage}
          </h2>
        )}
      <Card className="loginCard">
        <h1 className="header">Stop Going To The Dog Park Alone</h1>
        <form className="loginForm" onSubmit={this.login}>
          <h2>Login</h2>
          <div>
             <TextField
                id="outlined-name"
                label="Username"
                className="inputField"
                value={this.state.username}
                onChange={this.handleInputChangeFor('username')}                
                margin="normal"
                variant="outlined"
              />
          </div>
          <div>
            <TextField
                id="outlined-name"
                label="Password"
                className="inputField"
                type="password"
                value={this.state.password}
                onChange={this.handleInputChangeFor('password')}                
                margin="normal"
                variant="outlined"
              />
          </div>
          <div>
            <Button variant="contained" color="primary" type="submit" value="Log in" name="submit">Log In</Button>
          </div>
        </form>
        
        <center>
          <Button
            variant="contained" color="secondary" size="medium"
            onClick={() => {this.props.dispatch({type: 'SET_TO_REGISTER_MODE'})}}
          >
            Register Here
          </Button>
        </center>
        </Card>
      </div>
    );
  }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(LoginPage);
