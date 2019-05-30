import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardActionArea, CardContent, CardMedia, MenuItem, Button, Typography, ListItem, List, ListItemText, FormControl, FormLabel, TextField} from '@material-ui/core';
class MyProfile extends Component {

  state = {
      email: '',
      phoneNumber: '',
      preferredContactMethod: ''
  }

  contactMethods = [
  {value: 'Email',},
  {value: 'Text',},
  {value: 'Either',}
];

componentDidMount(){
    //this.props.dispatch({type: 'FETCH_USER'})
    this.props.dispatch({type: 'FETCH_DOGS'})
    this.props.dispatch({ type: 'FETCH_HOME_PARK'})
}
    
handleInputChangeFor = propertyName => (event) => {
    console.log('in handleInputFor' )
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  handleUpdate = (event) => {
      console.log('in handleUpdate')
  }

  handleClick = (event) => {
      console.log('in handleClick')
  }

render() {
    console.log('updated email state: ', this.state.email);
    console.log('updated phone state: ', this.state.phoneNumber);
    console.log('updated preferred contact method state: ', this.state.preferredContactMethod);
  return(
  <>    
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
    <Button onClick={this.handleClick} variant="contained" color="primary">Update Info</Button>
     </div>
    </Card>
    </div>
    
    <div className="updateFormDiv">
     <Card className="updateFormCard">
      <Typography variant="h5">Update Your Info</Typography>
       <FormControl className="updateForm"></FormControl>
       <FormLabel>Update Your Data & Submit</FormLabel>
       <div>
        <TextField
        label="Email"
        onChange={this.handleInputChangeFor('email')}
        variant="outlined"
        fullWidth
        //helperText="Your Updated Email Here"
        margin="normal"
        ></TextField>   
       </div>
       <div>
        <TextField
         label="Phone Number"
         type="number"
         onChange={this.handleInputChangeFor('phoneNumber')}
         variant="outlined"
         fullWidth
         //helperText="Your Updated Phone Number Here"
         margin="normal"
        ></TextField>
       </div>
     <div> 
        <TextField select
        label="Preferred Contact Method"
        value={this.state.preferredContactMethod}
        fullWidth
        variant="outlined"
        margin="normal"
        onChange={this.handleInputChangeFor('preferredContactMethod')}
        helperText="Please Select How You Prefer To Receive Notifications"
        >
            {this.contactMethods.map(option => (
        <MenuItem key={option.value} value={option.value}>
        {option.value}
        </MenuItem>))}
        </TextField>
        </div>
      <Button variant="contained" color="secondary" onClick={this.handleUpdate}>Save Changes</Button>
     </Card>
    </div>
    </>
    )}


}

const mapStateToProps = (reduxState) => ({
    user: reduxState.user,
    dogs: reduxState.setDogsReducer,
    // thisUser: reduxState.
    homePark: reduxState.setHomeParkReducer
    
})

export default connect(mapStateToProps)(MyProfile);