import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, MenuItem, Button, Typography, FormControl, FormLabel, TextField, Grid } from '@material-ui/core';
import "react-datepicker/dist/react-datepicker.css";
import { withStyles, ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#4caf50' },
    secondary: { main: '#81d4fa' }
  }
})

const styles = {
 root: {
  paddingBottom: '75px',
  
 },
  dogPic: {
    justify: 'center',
    objectFit: 'cover',
    height: '300px',
    width: '100%'
  },
  heading: {
    marginTop: '30px',
    marginBottom: '30px'
    
  },
  subHead: {
    marginTop: '10px'    
  },
  form: {
    width: '700px',
    height: '475px'
  },
  formLabelText: {
    fontSize: '24px',
    marginTop:'15px',
    marginBottom: '15px',
    marginLeft: '170px'
  },
  breakUpDiv: {
    backgroundColor: 'gray',
    height: '1px',
    width: '900px',
    marginTop: '20px'
  },
  playdateInput: {
    marginTop: '15px',
    marginLeft: '150px',
    marginBottom: '10px',
  },
  playdateInputPark:{
    marginTop: '15px',
    marginLeft: '80px',
    marginBottom: '10px',
  },
  eventButton: {
    marginLeft: '150px',
    marginTop: '25px',
    marginBottom: '15px',
  }
}

class GoToTheParkForm extends Component {

state = {
    notes: '',
    date: '',
    time: '',
    dogPark: ''
}

//call in the list of DPs from the DB
componentDidMount(){
    this.props.dispatch({ type: 'FETCH_PARKS'})
    this.props.dispatch({ type: 'FETCH_NETWORK'})
  }

//update the state for each property on change
handleInputChangeFor = propertyName => (event) => {
    //console.log('in handleInputFor' )
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  // on the click of the 'add event' button, run the add event dispatch to the 
  //SEND_EVENT saga and post the new event to the DB in the 'playdates' table
handleClick = (event) => {
    console.log('in handleClick');
    event.preventDefault();

    this.props.dispatch({ type: 'SEND_EVENT',
    payload: {
       date: this.state.date,
       time: this.state.time,
       dog_park_id: this.state.dogPark,
       notes: this.state.notes,
       id: this.props.user.id 
    }
    });
    alert('Your Network Has Been Alerted! Get Ready To DogParkWell!')

    //this.props.history.push('/');
    
}

render(){
  const {classes} = this.props;

    console.log('date state: ', this.state.date);
    console.log('time state: ', this.state.time);
    console.log('notes state: ', this.state.notes);
    console.log('dog park state: ', this.state.dogPark);
    
    
  return(
    <>
    <Grid className={classes.root}>
     <img src="./Images/tanna.JPG" alt="German Shepherd at park" className={classes.dogPic} />
     <Grid container justify="center" className={classes.heading}>
          <Typography variant="h2">Ready To Go To The Park?</Typography>
          <Typography className={classes.subHead} variant="h6">Let Your DogParkWell Network Know When You're Going & Watch As Your Pups Get Tired Faster!</Typography>
            <div className={classes.breakUpDiv}></div>
    </Grid>
    <Grid container justify="center">
     <ThemeProvider theme={theme}> 
     <Card className={classes.form}>
     <div>
     
      <FormControl>
       <FormLabel className={classes.formLabelText}>Add Your Next Dog Park Event</FormLabel>
        <TextField
        id="date"
         label="Date"
         //value={this.state.date}
         type="date"
         defaultValue="2019-06-01"
         className={classes.playdateInput}
         onChange={this.handleInputChangeFor('date')}
        ></TextField>
     <TextField
        id="time"
        label="Dog Park Time"
        //value={this.state.time}
        type="time"
        defaultValue="00:15"
        className={classes.playdateInput}
        onChange={this.handleInputChangeFor('time')}
       ></TextField>  
        <TextField
        label="Notes"
        value={this.state.notes}
        onChange={this.handleInputChangeFor('notes')}
        variant="outlined"
        className={classes.playdateInput}
        margin="normal"
        ></TextField>
       <div>
           <TextField select
            label="Dog Park You're Going To"
            value={this.state.dogPark}
            fullWidth
            className={classes.playdateInputPark}
            variant="outlined"
            margin="normal"
            onChange={this.handleInputChangeFor('dogPark')}
            helperText="Select the dog park that you're going to"
            >
              {this.props.dogPark.map(option => (
          <MenuItem key={option.id} value={option.id}>
            {option.dog_park}
          </MenuItem>))} 
          </TextField>
       </div>
       
       
      <Button
         variant="contained"
         color="secondary"
         onClick={this.handleClick}
         className={classes.eventButton}
        >Add Your Event & Notify Your Network</Button>
      </FormControl>
     </div>
    </Card>
    </ThemeProvider>
    </Grid>
    </Grid>
    </>

        
    )
}

}




const mapStateToProps = (reduxState) => {
    return {
        reduxState,
        user: reduxState.user,
        dogPark: reduxState.dogParkReducer,

    }
}

export default withStyles(styles) (connect(mapStateToProps)(GoToTheParkForm));