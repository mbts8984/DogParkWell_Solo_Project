const setSearchReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_SEARCH_ANSWER':
            console.log('in setSearchReducer with payload:', action.payload)
            return action.payload;
        default:
            return state;
    }
};

//stores the user data for the logged in user
export default setSearchReducer;