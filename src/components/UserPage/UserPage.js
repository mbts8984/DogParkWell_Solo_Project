import React, { Component } from 'react';
import { connect } from 'react-redux';
//import LogOutButton from '../LogOutButton/LogOutButton';
import './UserPage.css';
import {  List, Card, ListItem, ListItemText, Typography, Grid, ListItemSecondaryAction} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import {withStyles} from '@material-ui/styles';
//import {createMuiTheme} from '@material-ui/core/styles';
import moment from 'moment';

// const theme =createMuiTheme({
//   palette: {
//     primary: {main: '#4caf50'},
//     secondary: { main: '#81d4fa'}
//   }
// })

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`

const styles = {
  parkHistory: {
    margin: '30px',

  },
  network: {
    margin: '30px'
  },
  anniePic:{
    objectFit: 'cover',
    height: '300px',
    width: '100%',
    objectPosition:'10% 50%'
  },
  headerName: {
    paddingLeft: '30px',
    marginTop: '25px'
  }
}


class UserPage extends Component {

state = {
  eventId: ''
}

//run get requests for both the network and playdate tables
componentDidMount(){
  this.props.dispatch({ type: 'FETCH_NETWORK'})
  this.props.dispatch({ type: 'FETCH_EVENT'})
}


handleEventDelete = (id) => {
  console.log('in handleEventDelete with id', id);
  this.props.dispatch({ type: 'DELETE_EVENT', payload: {id : id}})

}
render() {
  const {classes} = this.props;
  return(
  <div>
    <img src="./Images/anniesmall.JPG" alt="great dane puppy standing on log" className={classes.anniePic}/>
    
    <Typography variant="h4" className={classes.headerName}>
      Welcome, { this.props.user.username }!
    </Typography>
    
    {/* listing of user's dog park network. Including people and dog names */}
    <Card className={classes.network}>
      <Typography variant="h5">Dog Park Friends</Typography>
     <br/>
     <Grid>
       <div className="networkListDiv">
      <List>
       {this.props.network.map(friend => (
         <ListItem key={friend.friend_id}>
          <ListItemText secondary={friend.dog_park}><b>{friend.human_name} & {friend.dog_name}</b> - A {friend.color} {friend.breed}</ListItemText>
         </ListItem>
       ))}
        <ListItem>
          <ListItemText secondary="Add Some Friends & Watch Your Network Grow">Humans & Dogs</ListItemText>
        </ListItem>
      </List>
     </div>
     {/* <ThemeProvider theme={theme}>
     <Button variant="contained" color="primary">COLOR SHIT</Button>
     </ThemeProvider> */}
     </Grid>
    </Card>
    
    <Card className={classes.parkHistory}>
      <Typography variant="h5">My Park History</Typography>
      <br/>
    <Grid> 
    <div className="eventListDiv">
      <List>
        {this.props.event.map(event => (
          <ListItem key={event.id}>
            {/* {console.log('HERE IS THE DATE: ', moment(event.date).format("MMM Do YY"))} */}
            <ListItemText secondary={event.notes}><b>Where:</b> {event.dog_park} <b>When: </b>{moment(event.date).format("MMM Do YYYY")}
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
    <div></div>
    {/* <p>Your ID is: {props.user.id}</p> */}
    {/* <LogOutButton className="log-in" /> */}
  </div>

  );
}}

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = (state) => ({
  user: state.user,
  event: state.setEventReducer,
  network: state.setNetworkReducer
});

// this allows us to use <App /> in index.js
export default withStyles(styles) (connect(mapStateToProps)(UserPage));
