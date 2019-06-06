import React, { Component } from 'react';
//import './Footer.css'
import {Typography, Grid} from '@material-ui/core';
import {withStyles, ThemeProvider} from '@material-ui/styles';
import {createMuiTheme} from '@material-ui/core/styles';


const theme =createMuiTheme({
  palette: {
    primary: {main: '#388e3c'},
    secondary: { main: '#81d4fa'}
  }
})

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const styles = {
  root: {
    justify: 'center',
    width: '103%',
    backgroundColor: '#388e3c',
    overflow: 'hidden'
  }, 
  footer: {
    color: 'white',
    alignContents: 'center'
  }

};


class Footer extends Component {
  
  render(){
        const {classes} = this.props;

    return(
    <ThemeProvider theme={theme}>
     <Grid container spacing={5} color="primary" justify="center" className={classes.root}>
        <Grid item >
        <Typography variant="body2" className={classes.footer}><i> Go Out. Scoop Poop. Dog Park Well. </i> </Typography>
        </Grid>
      </Grid>
      </ThemeProvider>
    )
  }

}

export default withStyles(styles)(Footer);
