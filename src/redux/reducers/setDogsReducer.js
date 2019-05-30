const setDogsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_DOGS':
            console.log('in setDogsReducer with payload:', action.payload)
            return action.payload;
        default:
            return state;
    }
};

//stores the user data for the logged in user
export default setDogsReducer;