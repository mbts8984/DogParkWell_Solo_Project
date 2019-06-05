import axios from 'axios';
import { takeEvery } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_PARKS" actions
function* addFriendSaga(action) {
 console.log('in addFriendSaga with action.payload(should be the id of the person clicked): ', action.payload);
 
    try {
      //POST new friend to network table
    yield axios.post('/api/addFriend', action.payload);
    
  } catch (error) {
    console.log('error in addFriendSaga with code: ', error);
  }
}

function* makeFriends() {
  yield takeEvery('ADD_FRIEND', addFriendSaga);
}

export default makeFriends;