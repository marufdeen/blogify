import axios from 'axios';
import { GET_PROFILE, PROFILE_LOADING, CLEAR_CURRENT_PROFILE } from './types';

// Get profile
export const getCurrentProfile = () => (dispatch) => {
  dispatch(setProfileLoading());

  axios.get('http://localhost:5000/api/v3/profile')
    .then((res) => dispatch({
      type: GET_PROFILE,
      payload: res.data
    }))
    .catch((err) => dispatch({
      type: GET_PROFILE,
      payload: {}
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
