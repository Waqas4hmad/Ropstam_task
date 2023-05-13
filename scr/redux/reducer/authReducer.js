import { LOGIN_FAIL, SIGNIN, SIGNOUT } from "../action/type";

const initialState = {
    user: null,
    error: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNIN:
            return {
                ...state,
                user: action.payload,
                error: null,
            };
        case SIGNOUT:
            return {
                ...state,
                user: null,
                error: null,

            };
        case LOGIN_FAIL:
            return {
                ...state,
                user: null,
                error: action.payload
            }
        default:
            return state
    }
}

export default authReducer;