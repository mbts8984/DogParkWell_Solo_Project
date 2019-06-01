import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Button, Typography, TextField, FormControl, ListItem, List, ListItemText, Divider, FormLabel } from '@material-ui/core';

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
        
        this.props.dispatch({ type: 'SEARCH_USERS', 
        payload: {
            human_name: this.state.humanName
        }
        })
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
     <div>
      <Typography variant="h4">Search Results</Typography>
    </div>
     <List>
        <ListItem>
         <ListItemText>
             <Typography variant="body1">Human & Dog1</Typography>
         </ListItemText>
        </ListItem>
        <ListItem>
         <ListItemText>
             <Typography variant="body1">Human & Dog2</Typography>
         </ListItemText>
        </ListItem>
     </List>
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