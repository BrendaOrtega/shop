import {CHECK_IF_USER_SUCCESS, LOG_IN_SUCCESS, LOG_OUT_SUCCESS} from "../actions/userActions";

export function userReducer(state={}, action){
    switch(action.type){
        case LOG_IN_SUCCESS:
            return action.user;
        case LOG_OUT_SUCCESS:
            return {};
        case CHECK_IF_USER_SUCCESS:
            return action.user;
        default:
            return state
    }
}