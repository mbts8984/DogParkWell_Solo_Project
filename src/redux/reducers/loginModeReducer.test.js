import loginMode from './loginModeReducer.js';

test('should have correct initial state', () => {

    let returnedState = loginMode(undefined, {})
    expect(returnedState).toEqual('login')
})

test('should toggle to register mode', () => {
    let action = {
        type: 'SET_TO_REGISTER_MODE'
    }
    let returnedState = loginMode(undefined, action)
    expect(returnedState).toEqual('register')
})