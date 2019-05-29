const setNetworkReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_NETWORK':
            console.log('in setNetworkReducer with payload:', action.payload)
            return action.payload;
        default:
            return state;
    }
};

// user will be on the redux state at:
// state.user
export default setNetworkReducer;