import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import {Typography} from '@material-ui/core';
import {withStyles} from '@material-ui/styles';
//import {createMuiTheme} from '@material-ui/core/styles';

const styles = {
  root: {
    flexGrow: 1
  },
  nav: {
    overflow: 'hidden',
    backgroundColor: '#A9A9A9',
    width: '100%'
  },
  navTitle: {
    fontSize: '24px',
    fontWeight: '700',
    display: 'inline-block',
    color: 'white',
    paddingLeft: '10px',
  },
  navLink: {
    float: 'left',
    color: 'white',
    backgroundColor: '#A9A9A9',
    textAlign: 'center',
    padding: '24px',
    fontSize:  '15px',
    border: 'none',
    cursor: 'pointer',
    outline: '0'
  },
  navRight: {
    float: 'right'
  }
}

// const theme =createMuiTheme({
//   palette: {
//     primary: {main: '#4caf50'},
//     secondary: { main: '#81d4fa'}
//   }
// })

class Nav extends Component {
  render(){
    //const {classes} = this.props;
    return(
      <div className="nav">
        <Link to="/home">
          <Typography variant="h4" className="nav-title">DogParkWell</Typography>
        </Link>
        <div className="nav-right">
          <Link className="nav-link" to="/home">
            {/* Show this link if they are logged in or not,
            but call this link 'Home' if they are logged in,
            and call this link 'Login / Register' if they are not */}
            {this.props.user.id ? 'Home' : 'Login / Register'}
          </Link>
          {/* Show the link to the info page and the logout button if the user is logged in */}
          {this.props.user.id && (
            <>
              <Link className="nav-link" to="/createParkEvent">
                Go To The Park
              </Link>
              <Link className="nav-link" to="/dogForm" >
                Add My Dog!
              </Link>
              <Link className="nav-link" to="/myNetwork">
                My Network
              </Link>
              <Link className="nav-link" to="/my-profile">
                My Profile
              </Link>
              <LogOutButton className="nav-link"/>
            </>
          )}
          {/* Always show this link since the about page is not protected */}
          {/* <Link className="nav-link" to="/my-profile">
            My Profile
          </Link> */}
        </div>
      </div>
    )
  }
}


// const Nav = (props) => (
//   <div className="nav">
//     <Link to="/home">
//       <h2 className="nav-title">DogParkWell</h2>
//     </Link>
//     <div className="nav-right">
//       <Link className="nav-link" to="/home">
//         {/* Show this link if they are logged in or not,
//         but call this link 'Home' if they are logged in,
//         and call this link 'Login / Register' if they are not */}
//         {props.user.id ? 'Home' : 'Login / Register'}
//       </Link>
//       {/* Show the link to the info page and the logout button if the user is logged in */}
//       {props.user.id && (
//         <>
//           <Link className="nav-link" to="/createParkEvent">
//             Go To The Park
//           </Link>
//           <Link className="nav-link" to="/dogForm" >
//             Add My Dog!
//           </Link>
//           <Link className="nav-link" to="/myNetwork">
//             My Network
//           </Link>
//           <Link className="nav-link" to="/my-profile">
//              My Profile
//           </Link>
//           <LogOutButton className="nav-link"/>
//         </>
//       )}
//       {/* Always show this link since the about page is not protected */}
//       {/* <Link className="nav-link" to="/my-profile">
//         My Profile
//       </Link> */}
//     </div>
//   </div>
// )

// Instead of taking everything from state, we just want the user
// object to determine if they are logged in
// if they are logged in, we show them a few more links 
// if you wanted you could write this code like this:
// const mapStateToProps = ({ user }) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

export default withStyles(styles) (connect(mapStateToProps)(Nav));
