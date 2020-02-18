import axios from 'axios';
import { GET_PROFILE, PROFILE_LOADING, CLEAR_CURRENT_PROFILE, GET_ERRORS } from './types';

// Get profile
export const getCurrentProfile = (res) => (dispatch) => {
  console.log('hhh', dispatch(setProfileLoading()));
/*   dispatch(setProfileLoading());
  axios.get('http://localhost:5000/api/v3/profile')
    .then((res) => dispatch({
      type: GET_PROFILE,
      payload: console.log(res.data)
    }))
    .catch((err) => dispatch({
      type: GET_PROFILE,
      payload: {}
    })); */
};

export const createProfile = (profileData, history) => (dispatch) => {
  axios.put('http://localhost:5000/api/v3/editProfile', profileData)
    .then((res) => history.push('/dashboard'))
    .catch((err) => dispatch({
      type: GET_ERRORS,
      payload: err.respond.data.errors
    }));
};
// Profile  loading
export const setProfileLoading = () => ({
  type: PROFILE_LOADING
});

// Profile  loading
export const clearCurrentProfile = () => ({
  type: CLEAR_CURRENT_PROFILE
});
