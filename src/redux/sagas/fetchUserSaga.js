import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_PARKS" actions
function* fetchUserSaga() {
  try {
      //GET the USER for an individual user
    const response = yield axios.get('/api/getClient');
    //call the 'SET_USER reducer to store the dog park options
    yield put({ type: 'SET_USER', payload: response.data });
  } catch (error) {
    console.log('fetchUserSaga GET request failed', error);
  }
}

function* getUserSaga() {
  yield takeEvery('FETCH_EVENT', fetchUserSaga);
}

export default getUserSaga;