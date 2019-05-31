import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, MenuItem, Button, Typography, FormControl, FormLabel, TextField } from '@material-ui/core';
import "react-datepicker/dist/react-datepicker.css";


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

    this.props.history.push('/');
    
}

render(){
    console.log('date state: ', this.state.date);
    console.log('time state: ', this.state.time);
    console.log('notes state: ', this.state.notes);
    console.log('dog park state: ', this.state.dogPark);
    
    
  return(
    <div>
     <img src="./Images/anniesmall.JPG" alt="great dane puppy standing on log" className="anniePic" />
          <Typography variant="h3">Ready To Go To The Park?</Typography>
          <Typography variant="h6">Let Your DogParkWell Network Know When You're Going & Watch As Your Pups Get Tired Faster!</Typography>

    <Card>
     {/* <div>
      <DatePicker
       selected={this.state.startDate}
       onChange={this.handleChange}
      />
     </div> */}
     
     <div>
     
      <FormControl>
       <FormLabel>Add Your Next Dog Park Event</FormLabel>
        <TextField
         id="date"
         label="Date"
         //value={this.state.date}
         type="date"
         defaultValue="2019-06-01"
         className="calendar"
         onChange={this.handleInputChangeFor('date')}
        ></TextField>
     <TextField
        id="time"
        label="Dog Park Time"
        //value={this.state.time}
        type="time"
        defaultValue="12:00"
        className="timePicker"
        onChange={this.handleInputChangeFor('time')}
       ></TextField>  
        <TextField
        label="Notes"
        value={this.state.notes}
        onChange={this.handleInputChangeFor('notes')}
        variant="outlined"
        margin="normal"
        ></TextField>
       <div>
           <TextField select
            label="Dog Park You're Going To"
            value={this.state.dogPark}
            fullWidth
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
         color="primary"
         onClick={this.handleClick}
        >Let's Go To The Park</Button>
      </FormControl>
     </div>
    </Card>

    </div>


        
    )
}

}




const mapStateToProps = (reduxState) => {
    return {
        reduxState,
        user: reduxState.user,
        dogPark: reduxState.dogParkReducer 
    }
}

export default connect(mapStateToProps)(GoToTheParkForm);