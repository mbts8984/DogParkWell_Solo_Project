import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Typography, ListItem, List, ListItemText, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

const styles = {
}
class SearchListItems extends Component {
 state = {
    key: 1
 }
    

 render(){
   const {classes} = this.props;
       
    return(
    <>
        <List>
            {this.props.searchReducer.map(event => (
                <ListItem key={this.state.key++}>
                    <ListItemText secondary={event.dog_park}><b>{event.human_name}</b> & {event.dog_name} The {event.color} {event.breed}</ListItemText>
                 <Button variant="contained" color="primary">Add Friend</Button>
                </ListItem>

            ))}
        </List>
    </>
        )
    }
}

const mapStateToProps = (reduxState) => ({
    user: reduxState.user,
    searchReducer: reduxState.setSearchReducer

})

export default withStyles(styles)(connect(mapStateToProps)(SearchListItems))