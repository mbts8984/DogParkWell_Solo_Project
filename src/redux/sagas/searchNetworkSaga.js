import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_PARKS" actions
function* searchUserSaga() {
  try {
    console.log('in searchUserSaga')
      //GET the users that have the name of the human_name in the DB
    const response = yield axios.get('/api/searchUsers');
    // calls the return_search reducer to store the answer data
    yield put({ type: 'SET_SEARCH_ANSWER', payload: response.data });
  } catch (error) {
    console.log('fetchDogsSaga GET request failed', error);
  }
}

function* searchingSaga() {
  yield takeEvery('SEARCH_USERS', searchUserSaga);
}

export default searchingSaga;