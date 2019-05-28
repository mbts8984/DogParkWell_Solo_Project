import React, { Component } from 'react';
import { connect } from 'react-redux';

class DogForm extends Component {

  render(){
      return(
          <p>TEST FORM STUFF</p>
      )
  }
}



const mapStateToProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(mapStateToProps)(DogForm);