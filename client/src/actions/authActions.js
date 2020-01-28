import axios from 'axios';
import { REGISTER_ERRORS, LOGIN_ERRORS } from './types';

// Register User
export const registerUser = (userData, history) => (dispatch) => {
  axios
    .post('http://localhost:5000/api/v3/register', userData)
    .then((res) => history.push('/dashboard'))
    .catch((err) => dispatch({
      type: REGISTER_ERRORS,
      payload: err.response.data
    }));
};

// Login User
export const loginUser = (userData, history) => (dispatch) => {
  axios
    .post('http://localhost:5000/api/v3/login', userData)
    .then((res) => history.push('/dashboard'))
    .catch((err) => dispatch({
      type: LOGIN_ERRORS,
      payload: err.response.data
    }));
};
