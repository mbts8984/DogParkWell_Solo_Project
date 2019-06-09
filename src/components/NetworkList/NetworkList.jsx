import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Grid, Typography, List, ListItem, ListItemText} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

const styles = {
    root:{
     marginTop: '15px',
     paddingBottom: '20px'
    },
    friendsCard: {
     width: '700px',
     marginRight: '55px'
    },
    head: {
     marginLeft: '250px',
     marginTop:'20px',
     marginBottom: '15px',
     textDecoration: 'underline'
    },
    item: {
     marginLeft: '200px'
    },
    outerDiv: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '35px',
        marginBottom:'30px'
    },
    sidePic: {
      objectFit: 'cover',
      height: '500px',
      width: '85%',
      
      //marginBottom: '30px'
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
 <div className={classes.outerDiv}>
 <div>
    <img src="./Images/samandbogs.JPG" alt="great dane puppy standing on log" className={classes.sidePic} />
 </div>
 <Grid container justify="center" className={classes.root}>
  <Card className={classes.friendsCard}>
    <Typography className={classes.head} variant="h4">My Network</Typography>
    <br/>
    <List>
       {this.props.network.map(friend => (
         <ListItem key={friend.friend_id}>
          <ListItemText className={classes.item} secondary={friend.dog_park}><b>{friend.human_name} & {friend.dog_name}</b> - A {friend.color} {friend.breed}</ListItemText>
         </ListItem>
       ))}
      </List>
  </Card>
 </Grid>
 </div>
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