import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Button, Typography,} from '@material-ui/core';

class NetworkList extends Component {

render() {        
return (
 
    <div>
        <p>MY LIST O FRIENDS</p>
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

export default connect(mapStateToProps)(NetworkList);