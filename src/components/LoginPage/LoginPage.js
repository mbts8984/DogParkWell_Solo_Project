import React, { Component } from 'react';
import { connect } from 'react-redux';
import  {Grid, TextField, Card, Button} from '@material-ui/core';
//import './LoginPage.css';
import { withStyles } from '@material-ui/core/styles';


const styles = {
  root: {
    flexGrow: 1, 
    wrap: 'wrap'
  },
  loginCard: {
    margin: '50px',
    alignContent:'center',
    flexDirection: 'column',
    height: '500px',
    width: '600px'
  },
  imageGridItem: {
    justify: 'left',
    height: '100%',
    objectFit: 'cover'
  },
  header: {
    alignContent: 'center',
    paddingLeft: '30px'
  },
  loginForm:{
    backgroundColor:'#eeeeee',
    width: '80%',
    alignItems: 'center'
  },
  inputField:{
    justify: 'center'
  }
}




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
    const {classes} = this.props;
    return (
      <>
      <Grid container className={classes.root}>
       {/* <div className="loginBigDiv"> */}
        <img item className={classes.imageGridItem} src="./Images/littleblue.jpeg" alt="little blue Dane"/>
      
        {this.props.errors.loginMessage && (
          <h2
            className="alert"
            role="alert"
          >
            {this.props.errors.loginMessage}
          </h2>
        )}
    <Grid>
      <Card className={classes.loginCard}>
       <Grid item className={classes.header}> 
        <h1>Stop Going To The Dog Park Alone</h1>
       </Grid>
        <form className={classes.loginForm} onSubmit={this.login}>
          <h2>Login</h2>
         <Grid item className={classes.inputField}>
          <div>
             <TextField
                id="outlined-name"
                label="Username"
                className={classes.inputField}
                value={this.state.username}
                onChange={this.handleInputChangeFor('username')}                
                margin="normal"
                variant="outlined"
              />
          </div>
          </Grid>
          <Grid item className={classes.inputField}>
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
          </Grid>
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
      </Grid>
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
});

export default withStyles(styles) (connect(mapStateToProps)(LoginPage));
