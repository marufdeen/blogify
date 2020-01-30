// Register User
import axios from 'axios';
import { GET_ERRORS } from './types';

export const registerUser = (userData, history) => (dispatch) => {
  axios
    .post('http://localhost:5000/api/v3/register', userData)
    .then((res) => history.push('/dashboard'))
    .catch((err) => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }));
};

export const loginUser = (userData, history) => (dispatch) => {
  axios
    .post('http://localhost:5000/api/v3/login', userData)
    .then((res) => history.push('/dashboard'))
    .catch((err) => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }));
};
