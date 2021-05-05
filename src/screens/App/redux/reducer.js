import {LOGIN, LOGIN_FAILURE, SET_USER_INFO, SET_AUTH_TOKEN, LOGOUT, RESET_SERVER_ERROR} from './types';

const initialState = {
  user: false,
  authToken: false,
  serverErrors:false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {...state, requesting: true};

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
