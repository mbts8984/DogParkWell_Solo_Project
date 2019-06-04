import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Typography, ListItem, List, ListItemText, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

const styles = {
}
class SearchListItems extends Component {
 state = {
    key: 1
 }

 handleClick = (event) => {
  console.log('in handleClick');
     
 }
    

 render(){
   const {classes} = this.props;
       
    return(
      <>
        <div>
            {this.props.searchReducer.map(person => {
               return(
               <div key={this.state.key++}>
                <p secondary={person.dog_park}><b>{person.human_name}</b></p>
                {person.doginfo.map(dog => {
                    return(
                     <p key={dog.dogName}>{dog.dogName} - A {dog.dogColor} {dog.dogBreed}</p>
                    )})
                }
                <Button onClick={this.handleClick} variant="contained" color="primary">Add Friend</Button>
                </div> 
            )})}
        </div>
      </>
    



    )

}}

const mapStateToProps = (reduxState) => ({
    user: reduxState.user,
    searchReducer: reduxState.setSearchReducer

})

export default withStyles(styles)(connect(mapStateToProps)(SearchListItems))