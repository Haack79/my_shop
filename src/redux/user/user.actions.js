//functions that return objects/  the type must be the exact same as what reducer is expecting, payload is the state slice.

export const setCurrentUser = user => ({
    type: 'SET_CURRENT_USER',
    payload: user
})