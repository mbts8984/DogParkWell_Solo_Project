import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Grid, Typography, List, ListItem} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

const styles = {
    root:{
     marginTop: '15px'
    },
    friendsCard: {
     width: '1200px'
    },
    head: {
     marginLeft: '500px',
     marginTop:'20px',
     marginBottom: '15px',
     textDecoration: 'underline'
    },
    listItem: {
     marginLeft: '500px'
    }
}

class NetworkList extends Component {

render() {    
    const {classes} = this.props;    
return (
 <>
 <Grid container justify="center" className={classes.root}>
  <Card className={classes.friendsCard}>
    <Typography className={classes.head} variant="h4">My Network</Typography>
    <br/>
    <List>
     <ListItem className={classes.listItem}>PERSON AND DOG</ListItem>
     <ListItem className={classes.listItem}>PERSON AND DOG</ListItem>
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
        user: reduxState.user
    }
}

export default withStyles(styles) (connect(mapStateToProps)(NetworkList));