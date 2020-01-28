import { REGISTER_ERRORS, LOGIN_ERRORS } from '../actions/types';

const initialState = {};
export default function (state = initialState, action) {
  switch (action.type) {
    case REGISTER_ERRORS:
      return action.payload;
    case LOGIN_ERRORS:
      return action.payload;
    default:
      return state;
  }
}
