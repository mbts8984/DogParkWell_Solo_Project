const setEventReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_EVENT':
            console.log('in setEventReducer with payload:', action.payload)
            return action.payload;
        default:
            return state;
    }
};

//stores the various events for the logged in user
export default setEventReducer;