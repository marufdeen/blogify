// Register User
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';
import { GET_ERRORS, SET_CURRENT_USER } from './types';

export const setCurrentUser = (decoded) => ({
  type: SET_CURRENT_USER,
  payload: decoded
});
export const registerUser = (userData) => (dispatch) => {
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
      payload: err.response.data.errors
    }));
};

export const loginUser = (userData) => (dispatch) => {
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
export const logoutUser = () => (dispatch) => {
  // Remove token from localStorage
  localStorage.removeItem('jwtToken');
  // Remove auth header for future request
  setAuthToken(false);
  // Set current user to {} which will also set isAuthenticated to false
  dispatch(setCurrentUser({}));
}