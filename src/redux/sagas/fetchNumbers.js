import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_PARKS" actions
function* fetchNumbersSaga() {
  try {
    console.log('In fetchNumbersSaga')
      //GET the USER for an individual user
    const response = yield axios.get('/api/sendMessage');
    //call the 'SET_USER reducer to store the dog park options
    yield put({ type: 'SET_PHONE_NUMBERS', payload: response.data });
  } catch (error) {
    console.log('fetchNumbersSaga GET request failed', error);
  }
}

function* phoneNumbersSaga() {
  yield takeEvery('FETCH_NUMBERS', fetchNumbersSaga);
}

export default phoneNumbersSaga;