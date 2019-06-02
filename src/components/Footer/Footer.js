import React, { Component } from 'react';
import './Footer.css'
import {Typography, Grid} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';


// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const styles = {
  root: {
    justify: 'center',
    width: '100%',
    paddingTop: '20px',
    display: 'flex',
    marginTop: '80px',
    backgroundColor: '#036d19',
    overflow: 'hidden'
  }, 
  footer: {
    backgroundColor: '#036d19',
    overflow: 'hidden',
    color: 'white',
    alignContents: 'center'
  }

};


class Footer extends Component {
  
  render(){
        const {classes} = this.props;

    return(
     <Grid container className={classes.root}>
      
        {/* <div className='footerDiv'> */}
        <Grid item justify="center" spacing={12}>
        <Typography variant="body2" className={classes.footer}> Go Out. Scoop Poop. Dog Park Well.</Typography>
        </Grid>
        {/* </div> */}
      
      </Grid>
    )
  }

}

export default withStyles(styles)(Footer);
