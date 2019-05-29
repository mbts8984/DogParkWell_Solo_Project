import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_PARKS" actions
function* fetchEventSaga() {
  try {
      //GET the events for an individual user
    const response = yield axios.get('/api/playdate');
    //call the 'SET_EVENT reducer to store the dog park options
    yield put({ type: 'SET_EVENT', payload: response.data });
  } catch (error) {
    console.log('playdates GET request failed', error);
  }
}

function* eventSaga() {
  yield takeEvery('FETCH_EVENT', fetchEventSaga);
}

export default eventSaga;