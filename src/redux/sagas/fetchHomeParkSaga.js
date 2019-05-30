import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_PARKS" actions
function* fetchHomeParkSaga() {
  try {
    console.log('fetchHomeParkSaga')
      //GET the USER for an individual user
    const response = yield axios.get('/api/getHomePark');
    //call the 'SET_USER reducer to store the dog park options
    yield put({ type: 'SET_HOME_PARK', payload: response.data });
  } catch (error) {
    console.log('fetchHomeParkSaga GET request failed', error);
  }
}

function* homeParkSaga() {
  yield takeEvery('FETCH_HOME_PARK', fetchHomeParkSaga);
}

export default homeParkSaga;