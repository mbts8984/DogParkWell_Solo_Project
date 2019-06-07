import axios from 'axios';
import { takeEvery } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_PARKS" actions
function* sendAlertSaga(action) {
 console.log('in sendAlertSaga with action.payload(should be event details): ', action.payload);
 
try {
      //POST alert to network with event details to network table
    yield axios.post('/api/sendMessage', action.payload);
    
  } catch (error) {
    console.log('error in sendAlertSaga with code: ', error);
  }
}

function* alertNetworkSaga() {
  yield takeEvery('SEND_ALERT', sendAlertSaga);
}

export default alertNetworkSaga;