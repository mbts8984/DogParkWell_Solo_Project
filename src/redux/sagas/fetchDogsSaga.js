import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_PARKS" actions
function* fetchDogsSaga() {
  try {
    console.log('inFetchDogsSaga')
      //GET the USER for an individual user
    const response = yield axios.get('/api/getDogs');
    //call the 'SET_USER reducer to store the dog park options
    yield put({ type: 'SET_DOGS', payload: response.data });
  } catch (error) {
    console.log('fetchDogsSaga GET request failed', error);
  }
}

function* dogSaga() {
  yield takeEvery('FETCH_DOGS', fetchDogsSaga);
}

export default dogSaga;