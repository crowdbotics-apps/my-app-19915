import { SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAILURE, RESET_SERVER_ERROR } from './types';

const initialState = {
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
      return { ...state, requesting: false,serverErrors:false };

    case SIGNUP_FAILURE:
      return { ...state, requesting: false, serverErrors: action.error };

    default:
      return state;
  }
};
