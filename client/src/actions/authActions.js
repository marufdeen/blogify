// Register User
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';
import { GET_ERRORS, SET_CURRENT_USER } from './types';

export const registerUser = (userData, history) => (dispatch) => {
  axios
    .post('http://localhost:5000/api/v3/register', userData)
    .then((res) => {
      // Get token from res.data
      const { token } = res.data;
      // Store in a localStorage
      localStorage.setItem('jwtToken', token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwtDecode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch((err) => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }));
};

export const loginUser = (userData, history) => (dispatch) => {
  axios
    .post('http://localhost:5000/api/v3/login', userData)
    .then((res) => {
      // Get token from res.data
      const { token } = res.data;
      // Store in a localStorage
      localStorage.setItem('jwtToken', token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwtDecode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch((err) => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }));
};

export const setCurrentUser = (decoded) => ({
  type: SET_CURRENT_USER,
  payload: decoded
});
