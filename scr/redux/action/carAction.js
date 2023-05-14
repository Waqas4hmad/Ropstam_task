
import { CARS_FETCH, CARS_FETCH_ERROR } from './type'
import { API_URL } from '../../config/constants';
import axios from 'axios';
import { INVALID_LOGIN } from '../../constants';
const headers = {
    'Content-Type': 'application/json',
}
export const cars = () => {

    return async (dispatch) => {
        try {
            const cardata = await axios.get(`${API_URL}/cars`);
            const cars= cardata.data;
            if (cars) {
                dispatch({
                    type: CARS_FETCH,
                    payload: cars,
                });
                return cars;
            }
            else {
                dispatch({
                    type: CARS_FETCH_ERROR,
                    payload: INVALID_LOGIN
                });
                return false;
            }
        } catch (error) {
            console.log(error);
            dispatch({
                type: CARS_FETCH_ERROR,
                payload: error.message
            });
            return false;
        }

    }
}

// export const register = (formData) =>
//     async (dispatch) => {
//         try {
//             const response = axios.post(`${API_URL}/users`, JSON.stringify(formData), {
//                 headers: headers
//             })
//             if (response) {
//                 dispatch({ type: CARS_FETCH, payload: data });
//                 return true;
//             }
//             else {
//                 dispatch({ type: CARS_FETCH_ERROR, payload: response?.error });
//                 return false;
//             }
//         } catch (error) {
//             dispatch({ type: CARS_FETCH_ERROR, payload: response?.error });
//             return false;
//         }
//     }