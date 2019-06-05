import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Grid } from '@material-ui/core';
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
      marginBottom: '35px'
  },
  listStuff: {
      marginLeft:'30px'
  },
  addFriendBtn: {
    width: '150px',
    height: '50px',
    marginTop: '15px'
  }
}
class SearchListItems extends Component {
 state = {
    key: 1
 }

 handleClick = ( id ) => {
  console.log('in handleClick with clicked persons id & username ID: ', id);
  
  this.props.dispatch({ type: 'ADD_FRIEND', payload:
                     {firstId: this.props.user.id,
                      secondId: id  
                     }})
 }
    

 render(){
     
   const {classes} = this.props;
       
    return(
      <>
      <Grid container justify="center">
        <ThemeProvider theme={theme}>
        <div className={classes.root}>
            {this.props.searchReducer.map(person => {
               return(
               <div className={classes.listStuff} key={this.state.key++}>
                <p secondary={person.dog_park}><b>Human: {person.human_name}</b></p>
                <p><b>Dogs:</b></p>
                {person.doginfo.map(dog => {
                    return(
                     <p key={dog.dogName}><b>{dog.dogName}</b> -<i> A {dog.dogColor} {dog.dogBreed}</i></p>
                    )})
                }
              <Grid container justify="center">
                <Button onClick={() => this.handleClick(person.id)} variant="contained" className={classes.addFriendBtn} color="primary">Add Friend</Button>
              </Grid>
                </div> 
            )})}
        </div>
        </ThemeProvider>
       </Grid>
      </>
    



    )

}}

const mapStateToProps = (reduxState) => ({
    user: reduxState.user,
    searchReducer: reduxState.setSearchReducer

})

export default withStyles(styles)(connect(mapStateToProps)(SearchListItems))