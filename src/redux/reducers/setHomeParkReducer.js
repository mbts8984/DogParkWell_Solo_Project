const setHomeParkReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_HOME_PARK':
            console.log('in setHomeParkReducer with payload:', action.payload)
            return action.payload;
        default:
            return state;
    }
};

//stores the user data for the logged in user
export default setHomeParkReducer;