import React, {Component} from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import {connect} from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import DogForm from '../DogForm/DogForm.jsx';
import MyProfile from '../MyProfile/MyProfile.jsx';
import GoToTheParkForm from '../GoToTheParkForm/GoToThePark.jsx';
import MyNetwork from '../MyNetwork/MyNetwork.jsx';

import './App.css';

// const styles = {
//   root : {
//     backgroundColor: 'red'
//   }
// }

class App extends Component {
  componentDidMount () {
    this.props.dispatch({type: 'FETCH_USER'})
  }

  render() {
    return (
      <Router>
        <div>
        <header>
          <Nav/>
        </header>
        </div>
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />
            {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}
            <Route
              exact
              path="/about"
              component={AboutPage}
            />
            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/home will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/home */}
            <ProtectedRoute
              exact
              path="/home"
              component={UserPage}
            />
            {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the info page instead. */}
            <ProtectedRoute
              exact
              path="/info"
              component={InfoPage}
            />
            <ProtectedRoute
              exact
              path="/my-profile"
              component={ MyProfile }
            />
            <ProtectedRoute
              exact
              path="/dogForm"
              component={ DogForm }
            />
            <ProtectedRoute
            exact path="/createParkEvent"
            component= { GoToTheParkForm }
            />
            <ProtectedRoute
             exact path='/myNetwork'
             component = {MyNetwork}
            />
            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
          <Footer />
        
      </Router>
  )}
}

export default connect()(App);
