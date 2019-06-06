import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Grid, CardActions, Button, Typography, TextField, MenuItem, FormControl, FormLabel, FormGroup } from '@material-ui/core';
import { withStyles, ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
    palette: {
        primary: { main: '#388e3c' },
        secondary: { main: '#81d4fa' }
    }
})


const styles = {
 root: {
   margin: '15px'
 },
    dogPic: {
        justify: 'center',
        objectFit: 'cover',
        height: '300px',
        width: '100%'
    },
 dogCardGrid: {
   paddingBottom: '55px',
   marginTop: '30px'
 },
 subHead: {
     marginBottom:'20px'
 },
 dogCard: {
  width: '1000px'
 },
 formLabel: {
     fontSize: '24px',
     marginTop: '20px',
     marginLeft: '350px',
     marginBottom: '20px'
 },
 inputField: {
     marginLeft: '350px',
     width: '300px'
 },
 addDogBtn: {
     
     height: '45px',
     width: '150px',
     marginLeft: '410px',
     marginBottom: '20px',
     marginTop: '20px'
 }
}

class DogForm extends Component {
    state = {
        usernameid: this.props.user.id,
        dogName: '',
        breed: '',
        age: '',
        gender: '',
        color: '',
        size: ''
    };

    genderOptions = [
        {value: 'Female', id: 1 },
        {value: 'Male', id:2}
    ];

    sizeOptions = [
        {value: 'X-Small', id:1},
        {value: 'Small', id:2},
        {value: 'Medium', id:3},
        { value: 'Large', id: 4 },
        {value: 'X-Large', id:5},
        { value: 'Giant', id: 6}
    ]

    handleInputChangeFor = propertyName => (event) => {
        this.setState({
            [propertyName]: event.target.value,
        });
    }

    addDog = (event) => {
        event.preventDefault();
        console.log('in addDog');
        
        this.props.dispatch({ type: 'ADD_DOG', 
        payload: {
            username_id: this.state.usernameid,
            dog_name: this.state.dogName,
            breed: this.state.breed,
            age: this.state.age,
            gender: this.state.gender,
            color: this.state.color,
            size: this.state.size            
        }
    })
}

  render(){
      const {classes}=this.props;

      console.log('Heres the full state: ', this.state)
      return(
    <>
    <img src="./Images/littledane.JPG" alt="great dane puppy standing on log" className={classes.dogPic} />
    <ThemeProvider theme={theme}>
    <Grid container justify="center" spacing={2} className={classes.root}>
       <Typography className="welcomeHeader" variant="h2" component="h1">Welcome To Dog Park Well</Typography>
    </Grid> 
    <Grid container justify="center" className={classes.subHead}>
       <Typography className="welcomeHeader" variant="h6" component="h1">Add Your Dog & Start Meeting More 4-Legged Friends</Typography>
    </Grid>
    <Grid container justify="center" spacing={2} className={classes.dogCardGrid}>  
       <Card className={classes.dogCard}>
       <FormControl>
        <FormLabel className={classes.formLabel}> Add Your Dog's Information</FormLabel>
        <FormGroup>
        {/* dog name input field */}
        <div>
          <TextField
           label="Dog's Name"
           value={this.state.dogName}
           onChange={this.handleInputChangeFor('dogName')}
           variant="outlined"
           margin="normal"
           className={classes.inputField}
          ></TextField>
        </div>
        {/* end dog name input */}
        {/* dog breed input */}
        <div>
        <TextField
           label="Breed"
           value={this.state.breed}
           onChange={this.handleInputChangeFor('breed')}
           variant="outlined"
           margin="normal"
           className={classes.inputField}
          ></TextField>
        </div>
        {/* end breed input */}
        {/* age input */}
        <div>
          <TextField
           label="Age"
           type="number"
           value={this.state.age}
           onChange={this.handleInputChangeFor('age')}
           variant="outlined"
           margin="normal"
           className={classes.inputField}
          ></TextField>
        </div>
        {/* end age input */}
        {/* gender input*/}
        <div>
         <TextField
          select
          label="Gender"
          value={this.state.gender}
          variant="outlined"
          margin="normal"
          onChange={this.handleInputChangeFor('gender')}
          helperText="Select The Gender Of Your Pupper"
          className={classes.inputField}
         >
          {this.genderOptions.map(gender => (
            <MenuItem key={gender.id} value={gender.value}>{gender.value}</MenuItem>
          ))}
         </TextField>
        </div>
        {/* end gender input */}
        {/* color input */}
        <div>
          <TextField
           label="Color"
           value={this.state.color}
           onChange={this.handleInputChangeFor('color')}
           variant="outlined"
           margin="normal"
           className={classes.inputField}
          ></TextField>  
        </div>
        {/* end color input */}
        {/* size input dropdown */}
        <div>
            <TextField
            select
            label="Dog Size"
            value={this.state.size}
            variant="outlined"
            margin="normal"
            helperText="What size would you classify your dog as?"
            onChange={this.handleInputChangeFor('size')}
            className={classes.inputField}
            >
                {this.sizeOptions.map(size => (
                 <MenuItem key={size.id} value={size.value}>{size.value}</MenuItem> 
                ))}
            </TextField>
        </div>
        {/* end size input dropdown */}
        <CardActions>
            <Button className={classes.addDogBtn} type="submit" onClick={this.addDog} value="addDog" variant="contained" color="secondary" >Add My Dog</Button>
        </CardActions>
       </FormGroup>
       </FormControl>
       </Card>
    </Grid>
    </ThemeProvider>
    </>
      )
  }
}



const mapStateToProps = (reduxState) => {
    return {
        reduxState,
        user: reduxState.user
    }
}

export default withStyles(styles) (connect(mapStateToProps)(DogForm));