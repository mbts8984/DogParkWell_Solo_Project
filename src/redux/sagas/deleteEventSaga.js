import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_PARKS" actions
function* deleteEventSaga(action) {
 console.log('in deleteEventSaga with req.body (should be the id of the event): ', action.payload);
 
    try {
      //delete this event from the user's playdate table
    yield axios.put(`/api/deleteEvent/${action.payload.id}`, action.payload);
    yield put({type: 'FETCH_EVENT'})
  } catch (error) {
    console.log('error in deleteEventSaga DELETE request failed', error);
  }
}

function* deleteEvent() {
  yield takeEvery('DELETE_EVENT', deleteEventSaga);
}

export default deleteEvent;