import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Grid, MenuItem, Button, Typography, ListItem, List, ListItemText, FormControl, TextField} from '@material-ui/core';
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
    backgroundColor: '#424242',
    paddingBottom:'75px'
  },
  inputField: {
   padding: '10px'
  },
  dogPic: {
    justify: 'center',
    objectFit: 'cover',
    height: '300px',
    width: '100%'
  },
  profileCard: {
    width: '750px',
    marginTop: '30px'
  },
  head: {
    width: '100%',
    marginLeft: '42%',
    marginTop: '20px',
    textDecoration: 'underline',
    color: 'white'
  },
  profileList: {
    display: 'inline-block',
    flexDirection: 'column',
    alignContent: 'center'
  },
  profileItem: {
    align: 'center',
    //marginLeft: '400px'
    marginLeft: '40%'
  },
  profileItemHead: {
    align: 'center',
    margin: '40%',
    marginTop: '20px',
    marginBottom: '15px'
  },
  updateButton: {
    marginLeft: '40%',
    marginBottom: '25px',
  },
  updateFormCard: {
    width: '750px',
    marginTop: '30px',
  },
  updateGrid: {
    display: 'inline-block'
  },
  updateHead: {
    marginLeft: '35%',
    marginTop: '20px'
  },
  submitButton: {
    marginLeft: '40%',
    marginBottom: '25px',
    marginTop: '25px'
  }
}


class MyProfile extends Component {

  state = {
    email: '',
    phoneNumber: '',
    preferredContactMethod: '',
    buttonClicked: true
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
    //console.log('in handleInputFor' )
    this.setState({
      [propertyName]: event.target.value,
    });
  }

// handleEmailChange = (event) => {
//   console.log('in handleEmailChange');
//   this.setState({
//     stuffToUpdate: {
//       ...this.state,
//       email: event.target.value
//     }
//   })
  
// }

  handleUpdate = (event) => {
      console.log('in handleUpdate')
      event.preventDefault();

      this.props.dispatch({ type: 'UPDATE_USER',
      payload: {
        email: this.state.email,
        phone: this.state.phoneNumber,
        preferred_contact_method: this.state.preferredContactMethod,
        id: this.props.user.id
      }
      })
      this.setState({
        buttonClicked: !this.state.buttonClicked
      })
  }

  handleClick = (event) => {
      console.log('in handleClick');
      this.setState({
        ...this.state,
        buttonClicked: !this.state.buttonClicked
      })
  }

render() {
  const {classes}=this.props;
 

    // console.log('updated email state: ', this.state.email);
    // console.log('updated phone state: ', this.state.phoneNumber);
    // console.log('updated preferred contact method state: ', this.state.preferredContactMethod);
    console.log('updateBtnClicked: ', this.state.buttonClicked);
  
  let displayToShow;

  if(this.state.buttonClicked) {
    displayToShow = (
      <>
        <img src="./Images/dogsRunning.JPG" alt="great dane puppy standing on log" className={classes.dogPic} />
     <ThemeProvider theme={theme}>
      <Grid container spacing={2} justify="center" className={classes.root}>
        <Typography variant="h3" className={classes.head}>My Profile</Typography>
        <Card className={classes.profileCard}>
          <Typography className={classes.profileItemHead} variant="h4">{this.props.user.username}</Typography>
          <Grid container className={classes.profileList}>
            <List>
              <ListItemText className={classes.profileItem}><b>Dog Name(s)</b></ListItemText>
              {this.props.dogs.map(dog => (
                <ListItem className={classes.profileItem} key={dog.id}>
                  {dog.dog_name}
                </ListItem>
              ))}
              <br/>
              <ListItemText className={classes.profileItem}><b>Email</b></ListItemText>
              <ListItem className={classes.profileItem}>{this.props.user.email}</ListItem>
              <br/>
              <ListItemText className={classes.profileItem}><b>Phone Number</b></ListItemText>
              <ListItem className={classes.profileItem}>{this.props.user.phone}</ListItem>
              <br/>
              <ListItemText className={classes.profileItem}><b>Preferred Contact Method</b></ListItemText>
              <ListItem className={classes.profileItem}>{this.props.user.preferred_contact_method}</ListItem>
              <br/>
              <ListItemText className={classes.profileItem}><b>Home Dog Park</b></ListItemText>
              {this.props.homePark.map(park => (
                <ListItem className={classes.profileItem} key={park.id}>{park.dog_park}</ListItem>
              ))}
            </List>
              <br />
            <Button className={classes.updateButton} onClick={this.handleClick} variant="contained" color="secondary">Update Info</Button>
          </Grid>
        </Card>
      </Grid>
     </ThemeProvider>
      </>
    )
  } else {
    displayToShow = (
    <>
      <img src="./Images/dogsRunning.JPG" alt="great dane puppy standing on log" className={classes.dogPic} />
      <ThemeProvider theme={theme}>
      <Grid container spacing={2} justify="center" className={classes.root}>
        <Typography variant="h3" className={classes.head}>My Profile</Typography>
          <Card className={classes.updateFormCard}>
          <Grid container justify="center" className={classes.updateGrid}>
            <Typography className={classes.updateHead} variant="h5">Update Your Info</Typography>
            <FormControl className="updateForm"></FormControl>
            <div>
              <TextField
              label="Email"
              onChange={this.handleInputChangeFor('email')}
              variant="outlined"
              
              //helperText="Your Updated Email Here"
              // margin="normal"
              className={classes.inputField}
              ></TextField>   
            </div>
            <div>
              <TextField
              label="Phone Number"
              type="number"
              onChange={this.handleInputChangeFor('phoneNumber')}
              variant="outlined"
              
              className={classes.inputField}
              margin="normal"
              ></TextField>
            </div>
          <div> 
              <TextField select
              label="Preferred Contact Method"
              value={this.state.preferredContactMethod}
              variant="outlined"
              margin="normal"
              onChange={this.handleInputChangeFor('preferredContactMethod')}
              helperText="Please Select How You Prefer To Receive Notifications"
              className={classes.inputField}
              >
                  {this.contactMethods.map(option => (
              <MenuItem key={option.value} value={option.value}>
              {option.value}
              </MenuItem>))}
              </TextField>
              </div>
            <Button className={classes.submitButton} variant="contained" color="primary" onClick={this.handleUpdate}>Save Changes</Button>
            </Grid>
          </Card>
        </Grid> 
      </ThemeProvider>  
      </>
    )
  }
  return( displayToShow
     
  
    
    )}


}

const mapStateToProps = (reduxState) => ({
    user: reduxState.user,
    dogs: reduxState.setDogsReducer,
    // thisUser: reduxState.
    homePark: reduxState.setHomeParkReducer
    
})

export default withStyles(styles) (connect(mapStateToProps)(MyProfile));