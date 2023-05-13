
import { SIGNIN, LOGIN_ERROR } from './type'
import { API_URL } from '../../config/constants';
import axios from 'axios';
import { INVALID_LOGIN } from '../../constants';
export const login = (email, password) => {

    return async (dispatch) => {
        const response = await axios.get(`${API_URL}/users`);
        const user=  response?.data.find((user) => user.email === email && user.password === password ) ?? [];      
        if(user)
        {
            dispatch({
                type: SIGNIN,
                payload: user
            });
        }
        else {
            dispatch({
                type: LOGIN_ERROR,
                payload: INVALID_LOGIN
            });

        }
    }
}