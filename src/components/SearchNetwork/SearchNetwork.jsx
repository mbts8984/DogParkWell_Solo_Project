import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardActions, Button, Typography, TextField, MenuItem, FormControl, FormLabel, FormGroup } from '@material-ui/core';

class SearchNetwork extends Component {

    state = {
        humanName: ''
    }

    handleInputChangeFor = propertyName => (event) => {
        this.setState({
            [propertyName]: event.target.value,
        });
    }

    searchNetwork = (event) => {
        event.preventDefault();
        console.log('in searchNetwork');
        
    }

render() {
  console.log('human name state: ', this.state.humanName);
  

    return (
    <div>
     <Card>
      <FormControl className="networkSearchForm">
       <FormLabel variant="h6">Search For Your Dog Park Friends</FormLabel>
        <div>
         <TextField
          label="Human's Name"
          value={this.state.humanName}
          variant="outlined"
          margin="normal"
          fullWidth
          onChange={this.handleInputChangeFor('humanName')}
         ></TextField>
        </div>
        <Button className="searchNetworkBtn" type="submit" onClick={this.searchNetwork} variant="contained" color="secondary">Search</Button>
      </FormControl>
     </Card>
    </div>
    )
}
}



const mapStateToProps = (reduxState) => {
    return {
        reduxState,
        user: reduxState.user
    }
}

export default connect(mapStateToProps)(SearchNetwork);