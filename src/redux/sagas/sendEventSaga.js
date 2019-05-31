import axios from 'axios';
import { takeEvery } from 'redux-saga/effects';

// worker Saga: will be fired on "SEND_EVENT" actions
function* addEventSaga(action) {
 console.log('in sendEventSaga with req.body: ', action.payload);
 
    try {
      //POST new playdate event to the playdate table
    yield axios.post('/api/sendEvent', action.payload);
    
  } catch (error) {
    console.log('error in addEventSage POST: ', error);
  }
}

function* sendEventSaga() {
  yield takeEvery('SEND_EVENT', addEventSaga);
}

export default sendEventSaga;