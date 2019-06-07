const setPhoneNumbers = (state = [], action) => {
    switch (action.type) {
        case 'SET_PHONE_NUMBERS':
            console.log('in setPhoneNumbers with payload:', action.payload)
            return action.payload;
        default:
            return state;
    }
};

//stores the user data for the logged in user
export default setPhoneNumbers;