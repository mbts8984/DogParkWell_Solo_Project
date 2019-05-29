import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './UserPage.css';
import {List, Card, ListItem, ListItemText, Typography, Grid, ListItemSecondaryAction} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`

class UserPage extends Component {

//run get requests for both the network and playdate tables
componentDidMount(){
  this.props.dispatch({ type: 'FETCH_NETWORK'})
  this.props.dispatch({ type: 'FETCH_EVENT'})
}


handleEventDelete = (event) => {
  console.log('in handleEventDelete');
}
render() {
  return(
  <div>
    <img src="./Images/anniesmall.JPG" alt="great dane puppy standing on log" className="anniePic"/>
    
    <h1 id="welcome">
      Welcome, { this.props.user.username }!
    </h1>
    <Typography variant="h5">Dog Park Friends</Typography>
    {/* listing of user's dog park network. Including people and dog names */}
    <Card>
     <Grid>
       <div className="networkListDiv">
      <List>
        <ListItem>
          <ListItemText secondary="Met at the Great Dane May Meetup in Eagan">Sarah & Cash</ListItemText>
        </ListItem>
      </List>
     </div>
     </Grid>
    </Card>
    
    <Card>
    <Grid> 
    <div className="eventListDiv">
      <List>
        {/* {this.props.setEventReducer.map()} */}
        <ListItem>
          <ListItemText secondary="Played with Sam and Bogart">Battle Creek May 31st @ 3pm</ListItemText>
          <ListItemSecondaryAction edge="end" aria-label="Delete">
            <DeleteIcon onClick={this.handleEventDelete}/>
          </ListItemSecondaryAction>
        </ListItem>
      </List>
     </div>
    </Grid>
    </Card>
    {/* <p>Your ID is: {props.user.id}</p> */}
    <LogOutButton className="log-in" />
  </div>

  );
}}

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = (state) => ({
  user: state.user,
  event: state.setEventReducer
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);
