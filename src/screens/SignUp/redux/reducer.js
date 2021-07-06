import { SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAILURE, RESET_SERVER_ERROR, SET_USER_INFO, SET_AUTH_TOKEN } from './types';

const initialState = {
  user:false,
  requesting: false,
  serverErrors:false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP:
      return { ...state, requesting: true };

      case RESET_SERVER_ERROR:
        return {...state, serverErrors: false};

    case SIGNUP_SUCCESS:
      return { ...state, requesting: false,serverErrors:false};

      case SET_USER_INFO:
      return {...state, requesting: false, user: action.data};

    case SIGNUP_FAILURE:
      return { ...state, requesting: false, serverErrors: action.error };

    default:
      return state;
  }
};
