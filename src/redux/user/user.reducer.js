//function that gets object and aciton
//object has a type: the action that's coming ;; and payload: to do something
// state is what will come from the store, when app first initializes there is no state so need to set it up.
import {UserActionTypes} from './user.types';
const INITIAL_STATE = {
    currentUser: null
}
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            };
        default:
            return state;
    }
};
export default userReducer;