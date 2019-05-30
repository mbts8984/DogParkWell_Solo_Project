import { combineReducers } from 'redux';
import errors from './errorsReducer';
import loginMode from './loginModeReducer';
import user from './userReducer';
import dogParkReducer from './dogParkReducer.js';
import setEventReducer from './setEventReducer.js';
import setNetworkReducer from './setNetworkReducer.js';
//import setUserReducer from './setUserReducer.js';
import setDogsReducer from './setDogsReducer.js';
import setHomeParkReducer from './setHomeParkReducer.js';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  loginMode, // will have a value of 'login' or 'registration' to control which screen is shown
  user, // will have an id and username if someone is logged in
  dogParkReducer, //stores all the dog park options in the DB
  setEventReducer, //stores all the playdate data stored in the DB for the logged in user
  setNetworkReducer, //stores all the network information from the logged in user
  //setUserReducer //stores all current users data
  setDogsReducer,
  setHomeParkReducer
});

export default rootReducer;
