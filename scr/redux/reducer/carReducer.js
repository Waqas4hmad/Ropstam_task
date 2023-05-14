import { LOGIN_ERROR, LOGIN_SUCCESS, REGISTER_SUCCESS, REGISTER_FAIL, CARS_FETCH, CARS_FETCH_ERROR, CARS_DELETE, CARS_DELETE_ERROR, CARS_UPDATE, CARS_UPDATE_ERROR } from "../action/type";

const initialState = {
    user: null,
    error: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case CARS_FETCH:
            return {
                ...state,
                user: action.payload,
                error: null,
            };
        case CARS_FETCH_ERROR:
            return {
                ...state,
                user: null,
                error: action.payload
            }
        case CARS_DELETE:
            return {
                ...state,
                user: action.payload,
                error: null
            }
        case CARS_DELETE_ERROR:
            return {
                ...state,
                user: null,
                error: action.payload
            }
        case CARS_UPDATE:
            return {
                ...state,
                user: action.payload,
                error: null
            }
        case CARS_UPDATE_ERROR:
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