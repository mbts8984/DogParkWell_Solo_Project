import React, { Component } from 'react';
//import './Footer.css'
import {Typography, Grid} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';


// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const styles = {
  root: {
    justify: 'center',
    width: '105%',
   // paddingTop: '10px',
    //paddingBottom: '10px',
   // display: 'flex',
   // marginTop: '20px',
    backgroundColor: 'Green',
    overflow: 'hidden'
  }, 
  footer: {
    backgroundColor: 'Green',
    //overflow: 'hidden',
    color: 'white',
    alignContents: 'center'
  }

};


class Footer extends Component {
  
  render(){
        const {classes} = this.props;

    return(
     <Grid container spacing={5} justify="center" className={classes.root}>
      
        {/* <div className='footerDiv'> */}
        <Grid item >
        <Typography variant="body2" className={classes.footer}> Go Out. Scoop Poop. Dog Park Well.</Typography>
        </Grid>
        {/* </div> */}
      
      </Grid>
    )
  }

}

export default withStyles(styles)(Footer);
