import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Typography, TextField, MenuItem, FormControl, FormLabel, FormGroup } from '@material-ui/core';
import SearchNetwork from '../SearchNetwork/SearchNetwork.jsx';
import NetworkList from '../NetworkList/NetworkList.jsx';

class MyNetwork extends Component {

render() {        
return (
    <div>
        <img src="./Images/anniesmall.JPG" alt="great dane puppy standing on log" className="anniePic" />
          <Typography variant="h3">My DogParkWell Network</Typography>
          <Typography variant="h6">Find & Add Some Contacts!</Typography>
    <SearchNetwork/>
    <div>
     <Typography variant="h4">My Friends</Typography>
    </div>
    <NetworkList/>
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

export default connect(mapStateToProps)(MyNetwork);