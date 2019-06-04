import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Typography, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

const styles = {
  root: {
      marginBottom: '35px'
  },
  listStuff: {
      marginLeft:'30px'
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

                <Button onClick={() => this.handleClick(person.id)} variant="contained" color="primary">Add Friend</Button>
                </div> 
            )})}
        </div>
       </Grid>
      </>
    



    )

}}

const mapStateToProps = (reduxState) => ({
    user: reduxState.user,
    searchReducer: reduxState.setSearchReducer

})

export default withStyles(styles)(connect(mapStateToProps)(SearchListItems))