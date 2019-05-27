const dogParkReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_PARK':
            console.log('in dogParkReducer with payload:', action.payload)
            return action.payload;
        default:
            return state;
    }
};

// user will be on the redux state at:
// state.user
export default dogParkReducer;