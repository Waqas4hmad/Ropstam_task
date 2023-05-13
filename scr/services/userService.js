import axios from 'axios';
import { API_URL } from '../config/constants';

export const loginAPI = async () => {
  try {
    const response = await axios.get(`${API_URL}/users`);
    return response;
  } catch (error) {
    throw new Error(error.response)
  }
}

