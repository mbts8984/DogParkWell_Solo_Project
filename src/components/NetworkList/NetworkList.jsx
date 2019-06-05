import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Grid, Typography, List, ListItem, ListItemText} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

const styles = {
    root:{
     marginTop: '15px',
     paddingBottom: '40px'
    },
    friendsCard: {
     width: '1200px',
    },
    head: {
     marginLeft: '500px',
     marginTop:'20px',
     marginBottom: '15px',
     textDecoration: 'underline'
    },
    ListItem: {
     marginLeft: '500px'
    }
}

class NetworkList extends Component {

    componentDidMount(){
     this.props.dispatch({ type: 'FETCH_NETWORK'})
    }

render() {    
    const {classes} = this.props;    
return (
 <>
 <Grid container justify="center" className={classes.root}>
  <Card className={classes.friendsCard}>
    <Typography className={classes.head} variant="h4">My Network</Typography>
    <br/>
    <List>
       {this.props.network.map(friend => (
         <ListItem key={friend.friend_id}>
          <ListItemText secondary={friend.dog_park}><b>{friend.human_name} & {friend.dog_name}</b> - A {friend.color} {friend.breed}</ListItemText>
         </ListItem>
       ))}
      </List>
  </Card>
 </Grid>
</>
        )
    }
}



const mapStateToProps = (reduxState) => {
    return {
        reduxState,
        user: reduxState.user,
        network: reduxState.setNetworkReducer
    }
}

export default withStyles(styles) (connect(mapStateToProps)(NetworkList));