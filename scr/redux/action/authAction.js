
import { LOGIN_SUCCESS, LOGIN_ERROR, REGISTER_SUCCESS, REGISTER_FAIL } from './type'
import { API_URL } from '../../config/constants';
import axios from 'axios';
import { INVALID_LOGIN } from '../../constants';
const headers = {
    'Content-Type': 'application/json',
}
export const login = (email, password) => {

    return async (dispatch) => {
        try {
            const response = await axios.get(`${API_URL}/users`);
            const user = response?.data.some((user) => {
                if (user.email === email && user.password === password) {
                    return true
                }
                return false
            })

            if (user) {
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: response,
                });
                return true;
            }
            else {
                dispatch({
                    type: LOGIN_ERROR,
                    payload: INVALID_LOGIN
                });
                return false;
            }
        } catch (error) {
            console.log(error);
            dispatch({
                type: LOGIN_ERROR,
                payload: error.message
            });
            return false;
        }

    }
}

export const register = (formData) =>
    async (dispatch) => {
        try {
            const response = axios.post(`${API_URL}/users`, JSON.stringify(formData), {
                headers: headers
            })
            if (response) {
                dispatch({ type: REGISTER_SUCCESS, payload: response });
                return true;
            }
            else {
                dispatch({ type: REGISTER_FAIL, payload: response?.error });
                return false;
            }
        } catch (error) {
            dispatch({ type: REGISTER_FAIL, payload: response?.error });
            return false;
        }
    }