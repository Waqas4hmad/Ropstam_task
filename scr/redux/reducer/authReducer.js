import { LOGIN_ERROR, LOGIN_SUCCESS, SIGNOUT } from "../action/type";

const initialState = {
    user: [],
    error: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload,
                error: null,
            };
        case LOGIN_ERROR:
            return {
                ...state,
                user: null,
                error: action.payload
            }
        default:
            return state;
    }
}

export default authReducer;