import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Typography } from '@material-ui/core';
import SearchNetwork from '../SearchNetwork/SearchNetwork.jsx';
import NetworkList from '../NetworkList/NetworkList.jsx';
import {withStyles, ThemeProvider} from '@material-ui/styles';
import {createMuiTheme} from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#4caf50' },
    secondary: { main: '#81d4fa' }
  }
})


const styles = {
    root: {
     justify: 'center',
    },
  headerPic:{
    justify: 'center',
    objectFit: 'cover',
    height: '500px',
    width: '100%'
  },
  title: {
    display: 'inline-flex',
    marginTop: '35px',
    fontSize: '55px'
  },
  subtitle:{
      marginTop: '23px',
      marginBottom: '20px',
      fontSize: '25px'
  },
  divSpacer: {
    backgroundColor: '#A9A9A9',
    width: '100%',
    height: '1px'
  }
}


class MyNetwork extends Component {

render() { 
    const {classes} = this.props;       
return (
   <>
   <ThemeProvider theme={theme}>
   <Grid container theme={theme} className={classes.root}>
   <div>
        <img src="./Images/tailBiting.JPG" alt="great dane puppy standing on log" className={classes.headerPic} />
         <Grid container justify="center" >
          <Typography className={classes.title} variant="h1">My DogParkWell Network</Typography>
        </Grid>
        <Grid container justify="center" >
          <Typography className={classes.subtitle} variant="h6">Find & Add Some Contacts!</Typography>
        </Grid>
    
    <SearchNetwork/>
    {/* <div>
     <Typography variant="h4">My Friends</Typography>
    </div> */}
    <div className={classes.divSpacer}></div>
    <NetworkList/>
    </div>
    </Grid>
    </ThemeProvider>
    </>
        )
    }
}



const mapStateToProps = (reduxState) => {
    return {
        reduxState,
        user: reduxState.user
    }
}

export default withStyles(styles) (connect(mapStateToProps)(MyNetwork));