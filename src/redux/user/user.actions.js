//functions that return objects/  the type must be the exact same as what reducer is expecting, payload is the state slice.
import {UserActionTypes} from './user.types';

export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
})