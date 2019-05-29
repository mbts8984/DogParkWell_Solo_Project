import axios from 'axios';
import {
    put,
    takeEvery
} from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_PARKS" actions
function* fetchNetworkSaga() {
    try {
        //GET the events for an individual user
        const response = yield axios.get('/api/network');
        //call the 'SET_EVENT reducer to store the dog park options
        yield put({
            type: 'SET_NETWORK',
            payload: response.data
        });
    } catch (error) {
        console.log('network GET request failed', error);
    }
}

function* networkSaga() {
    yield takeEvery('FETCH_NETWORK', fetchNetworkSaga);
}

export default networkSaga;