
import { LOGIN_SUCCESS, LOGIN_ERROR } from './type'
import { API_URL } from '../../config/constants';
import axios from 'axios';
import { INVALID_LOGIN } from '../../constants';

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
                    payload: user,
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