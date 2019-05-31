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

state = {
  eventId: ''
}

//run get requests for both the network and playdate tables
componentDidMount(){
  this.props.dispatch({ type: 'FETCH_NETWORK'})
  this.props.dispatch({ type: 'FETCH_EVENT'})
}


handleEventDelete = (event) => {
  console.log('in handleEventDelete with id', event);

}
render() {
  return(
  <div>
    <img src="./Images/anniesmall.JPG" alt="great dane puppy standing on log" className="anniePic"/>
    
    <h1 id="welcome">
      Welcome, { this.props.user.username }!
    </h1>
    
    {/* listing of user's dog park network. Including people and dog names */}
    <Card>
      <Typography variant="h5">Dog Park Friends</Typography>
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
      <Typography variant="h5">My Park History</Typography>
    <Grid> 
    <div className="eventListDiv">
      <List>
        {this.props.event.map(event => (
          <ListItem key={event.id}>
            <ListItemText secondary={event.notes}><b>Where:</b> {event.dog_park} <b>When: </b>{event.date}
            </ListItemText>
            <ListItemSecondaryAction edge="end" aria-label="Delete">
            <DeleteIcon onClick={() => this.handleEventDelete(event.id)} value={event.id}/>
          </ListItemSecondaryAction>
            </ListItem>
        ))}
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
