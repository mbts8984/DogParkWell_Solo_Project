import { all } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import registrationSaga from './registrationSaga';
import userSaga from './userSaga';
import getDogParkSaga from './dogParkSaga';
import setDogSaga from './addDogSaga.js';
import eventSaga from './fetchEventSaga.js';
import networkSaga from './fetchNetworkSaga.js';
//import getSearchUserResultSaga from './fetchUserSaga.js';
import dogSaga from './fetchDogsSaga.js';
import homeParkSaga from './fetchHomeParkSaga.js';
import updateUser from './updateUserSaga.js';
import sendEventSaga from './sendEventSaga.js';
import deleteEvent from './deleteEventSaga.js';
import searchingSaga from './searchNetworkSaga'
import makeFriends from './addFriendSaga.js';
import alertNetworkSaga from './sendAlertSaga.js';
import phoneNumbersSaga from './fetchNumbers.js';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(),
    registrationSaga(),
    userSaga(),
    getDogParkSaga(),
    setDogSaga(),
    eventSaga(),
    networkSaga(),
    //getSearchUserResultSaga(),
    dogSaga(),
    homeParkSaga(),
    updateUser(),
    sendEventSaga(),
    deleteEvent(),
    searchingSaga(),
    makeFriends(),
    alertNetworkSaga(),
    phoneNumbersSaga()
  ]);
}
