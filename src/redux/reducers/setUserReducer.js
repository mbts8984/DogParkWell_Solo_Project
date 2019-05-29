const setUserReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_USER':
            console.log('in setUserReducer with payload:', action.payload)
            return action.payload;
        default:
            return state;
    }
};

//stores the user data for the logged in user
export default setUserReducer;