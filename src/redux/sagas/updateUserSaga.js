import axios from 'axios';
import { takeEvery } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_PARKS" actions
function* updateUserSaga(action) {
 console.log('in updateUserSaga with req.body: ', action.payload);
 
    try {
      //PUT new dog to dog_data table
    yield axios.put(`/api/updateUser/${action.payload.id}`, action.payload);

  } catch (error) {
    console.log('error in updateUser PUT request failed', error);
  }
}

function* updateUser() {
  yield takeEvery('UPDATE_USER', updateUserSaga);
}

export default updateUser;