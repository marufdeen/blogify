import axios from 'axios';
import { GET_PROFILE, GET_ERRORS, PROFILE_LOADING } from './types';

// Profile  loading
export const setProfileLoading = () => ({
  type: PROFILE_LOADING
});
// Get profile
export const getProfile = () => (dispatch) => {
  dispatch(setProfileLoading());
  

};

