import {
  LOGIN,
  RESET_LOGIN,
  LOGIN_FAILURE,
  SET_USER_INFO,
  SET_AUTH_TOKEN,
  LOGOUT,
  RESET_SERVER_ERROR,
  FACEBOOK_LOGIN,
  SET_FACEBOOK_LOGIN,
} from './types';

const initialState = {
  user: false,
  authToken: false,
  serverErrors: false,
  facebookLogin: false,
  requestingFacebook: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {...state, requesting: true};

    case RESET_LOGIN:
      return {...state, ...initialState};

    case FACEBOOK_LOGIN:
      return {...state, requestingFacebook: true};

    case SET_FACEBOOK_LOGIN:
      return {...state, facebookLogin: action.isFbLogin};

    case LOGIN_FAILURE:
      return {...state, requesting: false, serverErrors: action.error};

    case RESET_SERVER_ERROR:
      return {...state, serverErrors: false};

    case SET_USER_INFO:
      return {...state, requesting: false, user: action.data};

    case SET_AUTH_TOKEN:
      return {...state, authToken: action.token};

    case LOGOUT:
      return {...state, ...initialState};

    default:
      return state;
  }
};
