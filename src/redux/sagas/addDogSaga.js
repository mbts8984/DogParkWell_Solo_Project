import axios from 'axios';
import { takeEvery } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_PARKS" actions
function* addDogSaga(action) {
 console.log('in addDogSaga with req.body: ', action.payload);
 
    try {
      //POST new dog to dog_data table
    yield axios.post('/api/addDog', action.payload);
    
  } catch (error) {
    console.log('Dog Park GET request failed', error);
  }
}

function* setDogSaga() {
  yield takeEvery('ADD_DOG', addDogSaga);
}

export default setDogSaga;