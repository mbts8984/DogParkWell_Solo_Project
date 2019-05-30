import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardActions, CardActionArea, CardContent, CardHeader, CardMedia, Button, Typography, ListItem, List, ListItemText} from '@material-ui/core';
class MyProfile extends Component {

componentDidMount(){
    //this.props.dispatch({type: 'FETCH_USER'})
    this.props.dispatch({type: 'FETCH_DOGS'})
}
    
// handleInputChangeFor = propertyName => (event) => {
//     this.setState({
//       [propertyName]: event.target.value,
//     });
//   }

render() {
  return(
  <div>
        
     <img src="./Images/anniesmall.JPG" alt="great dane puppy standing on log" className="anniePic"/>
   
    <Card>
    <Typography variant="h5">{this.props.user.username}</Typography>
     <div className="myProfileCardDiv">
     <List>
     {/* {this.props.reduxState.map(thisUser => (
          <ListItem>
             <ListItemText>{thisUser.email}</ListItemText>
            </ListItem>
        ))} */}
      <ListItem>ITEM ONE</ListItem> 
      <ListItem>ITEM TWO</ListItem>  
     </List>
     </div>
    </Card>

    </div>

    )}

}

const mapStateToProps = (reduxState) => ({
    user: reduxState.user,
    reduxState: reduxState.setUserReducer
})

export default connect(mapStateToProps)(MyProfile);