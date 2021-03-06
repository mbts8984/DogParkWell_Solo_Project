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
    marginLeft: '50px',
    backgroundColor: '#aadaac',
    marginRight: '50px'

  },
  network: {
    margin: '30px',
  },
   headerName: {
     //paddingLeft: '30px',
     marginTop: '65px',
     marginBottom: '65px',
     fontSize: '55px'
   },
  anniePic:{
    objectFit: 'cover',
    height: '500px',
    width: '100%',
    objectPosition:'10% 50%',
    //opacity: '0.9'
  },
  blueDiv: {
   backgroundColor: '#aadaac',
   marginBottom: '100px',
   paddingTop: '20px',
   marginTop: '70px'
  },
  greenDiv: {
    backgroundColor: '#aadaac',
    paddingTop: '5px'
  },
  parkHisHead: {
    marginTop: '15px',
    //textDecoration: 'underline',
    marginBottom: '20px'
  },
  networkHead: {
    textType: 'Arial',
    marginTop: '40px',
    marginBottom: '10px'
  },
  breakUpDiv: {
    height: '4px',
    width: '75%',
    backgroundColor: '#4caf50'
  },
  friendName: {
    marginLeft: '38%',
    marginBottom: '20px'
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
    
    <Grid container justify="center">
    <Typography variant="h1" className={classes.headerName}>
     <i> Welcome, { this.props.user.username }!</i>
    </Typography>
    </Grid>
    <Grid container justify="center">
    <div className={classes.breakUpDiv}></div>
    </Grid>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>


    
    {/* listing of user's dog park network. Including people and dog names */}
    <div className="topAngle"></div>
    <div className={classes.greenDiv}>
    <div className={classes.network}>
      <Grid className={classes.networkHead} container justify="center" textDecoration="underLined">
      <Typography variant="h4">Dog Park Friends</Typography>
      </Grid>
     <br/>
     <Grid>
       <div className="networkListDiv">
      <List>
       {this.props.network.map(friend => (    
         <ListItem key={friend.friend_id} className={classes.friendName}>
          <ListItemText secondary={friend.dog_park}><b>{friend.human_name} & {friend.dog_name}</b> - A {friend.color} {friend.breed}</ListItemText>
         </ListItem>
       ))}
        {/* <ListItem>
          <ListItemText secondary="Add Some Friends & Watch Your Network Grow">Humans & Dogs</ListItemText>
        </ListItem> */}
      </List>
     </div>
     </Grid>
    </div>
    </div>
    

   <div className={classes.blueDiv}>
    <div className={classes.parkHistory}>
      {/* <Grid container justify="center">
      <Typography className={classes.parkHisHead} variant="h4">My Park History</Typography>
      </Grid>
      <br/> */}
    <Grid> 
    <div className="eventListDiv">
      <div>
    <Grid container justify="center">
      <Typography className={classes.parkHisHead} variant="h4">My Park History</Typography>
      </Grid>
      <br/>
  </div>
      <List>
        {this.props.event.map(event => (
          <ListItem key={event.id}>
            {/* {console.log('HERE IS THE DATE: ', moment(event.date).format("MMM Do YY"))} */}
            <ListItemText className={classes.eventHis} secondary={event.notes}><b>Where:</b> {event.dog_park} <b>When: </b>{moment(event.date).format("MMM Do YYYY")}
            </ListItemText>
            <ListItemSecondaryAction edge="end" aria-label="Delete">
            <DeleteIcon onClick={() => this.handleEventDelete(event.id)} value={event.id}/>
          </ListItemSecondaryAction>
            </ListItem>
        ))}
      </List>
     </div>
    </Grid>
    <div className="bottomAngle"></div>
    </div>
    </div> 
    
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
