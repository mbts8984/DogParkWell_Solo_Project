import React, { Component } from 'react';
import { connect } from 'react-redux';
import  {Grid, TextField, Card, Button, Typography} from '@material-ui/core';
//import './LoginPage.css';
import {withStyles, ThemeProvider} from '@material-ui/styles';
import {createMuiTheme} from '@material-ui/core/styles';


const theme =createMuiTheme({
  palette: {
    primary: {main: '#4caf50'},
    secondary: { main: '#81d4fa'}
  }
})


const styles = {
  root: {
    flexGrow: 1, 
    wrap: 'wrap',
    marginBottom: '20px'
  },
  loginCard: {
    //margin: '50px',
    alignContent:'center',
    flexDirection: 'column',
    height: '550px',
    width: '600px',
    marginLeft: '25%',
    marginTop: '15%'
  },
  imageGridItem: {
    justify: 'left',
    height: '100%',
    objectFit: 'cover'
  },
  header: {
    alignContent: 'center',
    paddingLeft: '30px',
    marginTop: '20px'
  },
  loginForm:{
    backgroundColor: '#aadaac',
    width: '80%',
    alignItems: 'center',
    height: '300px'

  },
  inputField:{
    marginLeft: '75px',
    marginTop: '10px',
    marginBottom: '10px'
  },
  subHead: {
    marginLeft: '43%'
  },
  logInBtn: {
    marginLeft:'43%',
    marginBottom: '30px',
    marginTop: '15px'
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
        <img className={classes.imageGridItem} src="./Images/littleblue.jpeg" alt="little blue Dane"/>
      
        {this.props.errors.loginMessage && (
          <h2
            className="alert"
            role="alert"
          >
            {this.props.errors.loginMessage}
          </h2>
        )}
    <ThemeProvider theme={theme}>
    <Grid>
      <Card className={classes.loginCard}>
       <Grid item className={classes.header}> 
        <Typography variant="h4" >Stop Going To The Dog Park Alone</Typography>
       </Grid>
        <form className={classes.loginForm} onSubmit={this.login}>
          <h2 className={classes.subHead} >Login</h2>
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
                className={classes.inputField}
                type="password"
                value={this.state.password}
                onChange={this.handleInputChangeFor('password')}                
                margin="normal"
                variant="outlined"
              />
          </div>
          </Grid>
          <div>
            <Button variant="contained" color="primary" type="submit" value="Log in" className={classes.logInBtn}>Log In</Button>
          </div>
        </form>
        
        <center>
          <Button
            variant="contained" color="secondary" size="medium"
            onClick={() => {this.props.dispatch({type: 'SET_TO_REGISTER_MODE'})}}>
           <i> Register Here </i>
          </Button>
        </center>
        </Card>
      </Grid>
      </ThemeProvider>
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
