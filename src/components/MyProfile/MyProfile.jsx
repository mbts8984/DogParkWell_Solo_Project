import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardActions, CardActionArea, CardContent, CardHeader, CardMedia, Button, Typography, ListItem, List, ListItemText} from '@material-ui/core';
class MyProfile extends Component {

componentDidMount(){
    //this.props.dispatch({type: 'FETCH_USER'})
    this.props.dispatch({type: 'FETCH_DOGS'})
    this.props.dispatch({ type: 'FETCH_HOME_PARK'})
}
    
handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

render() {
  return(
  <div>
        
     <img src="./Images/anniesmall.JPG" alt="great dane puppy standing on log" className="anniePic"/>
   
    <Card>
    <Typography variant="h5">{this.props.user.username}</Typography>
     <div className="myProfileCardDiv">
     <List>
         <ListItemText><b>Dog Name(s)</b></ListItemText>
     {this.props.dogs.map(dog => (
          <ListItem key={dog.id}>
             {dog.dog_name}
            </ListItem>
        ))}
    <ListItemText><b>Email</b></ListItemText>
      <ListItem>{this.props.user.email}</ListItem>  
    <ListItemText><b>Phone Number</b></ListItemText>
      <ListItem>{this.props.user.phone}</ListItem>  
    <ListItemText><b>Preferred Contact Method</b></ListItemText>
    <ListItem>{this.props.user.preferred_contact_method}</ListItem>   
    <ListItemText><b>Home Dog Park</b></ListItemText>
    {this.props.homePark.map(park => (
        <ListItem key={park.id}>{park.dog_park}</ListItem>
    ))}
    </List>
    <Button variant="contained" color="primary">Update Info</Button>
     </div>
    </Card>

    </div>

    )}

}

const mapStateToProps = (reduxState) => ({
    user: reduxState.user,
    dogs: reduxState.setDogsReducer,
    // thisUser: reduxState.
    homePark: reduxState.setHomeParkReducer
    
})

export default connect(mapStateToProps)(MyProfile);