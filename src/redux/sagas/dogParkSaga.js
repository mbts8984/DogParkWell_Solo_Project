import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_PARKS" actions
function* fetchDogParkSaga() {
  try {
      //GET all the dog park options
    const response = yield axios.get('/api/dog-park');
    //call the 'SET_PARK reducer to store the dog park options
    yield put({ type: 'SET_PARK', payload: response.data });
  } catch (error) {
    console.log('Dog Park GET request failed', error);
  }
}

function* getDogParkSaga() {
  yield takeEvery('FETCH_PARKS', fetchDogParkSaga);
}

export default getDogParkSaga;