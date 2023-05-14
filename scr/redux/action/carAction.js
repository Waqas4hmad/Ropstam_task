
import { CARS_DELETE, CARS_DELETE_ERROR, CARS_FETCH, CARS_FETCH_ERROR, CARS_UPDATE, CARS_UPDATE_ERROR } from './type'
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

export const car_add = (formData) =>
    async (dispatch) => {
        try {
            const response = axios.post(`${API_URL}/cars`, JSON.stringify(formData), {
                headers: headers
            })
            if (response) {
                dispatch({ type: CARS_FETCH, payload: response });
                return true;
            }
            else {
                dispatch({ type: CARS_FETCH_ERROR, payload: "Error " });
                return false;
            }
        } catch (error) {
            dispatch({ type: CARS_FETCH_ERROR, payload: "Error" });
            return false;
        }
    }

    export const car_update = (formData,id) =>
    async (dispatch) => {
        try {
            const response = axios.put(`${API_URL}/cars/${id}`, JSON.stringify(formData), {
                headers: headers
            })
            if (response) {
                dispatch({ type: CARS_UPDATE, payload: response });
                return true;
            }
            else {
                dispatch({ type: CARS_UPDATE_ERROR, payload: "Error " });
                return false;
            }
        } catch (error) {
            dispatch({ type: CARS_UPDATE_ERROR, payload: "Error" });
            return false;
        }
    }


    export const car_delete = (id) =>
    async (dispatch) => {
        try {
            const response = axios.delete(`${API_URL}/cars/${id}`,{
                headers: headers
            })
            if (response) {
                dispatch({ type: CARS_DELETE, payload: response });
                return true;
            }
            else {
                dispatch({ type: CARS_DELETE_ERROR, payload: "Error " });
                return false;
            }
        } catch (error) {
            dispatch({ type: CARS_DELETE_ERROR, payload: "Error" });
            return false;
        }
    }