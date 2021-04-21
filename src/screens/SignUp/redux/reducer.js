import { SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAILURE } from './types';

const initialState = {
  requesting: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP:
      return { ...state, requesting: true };

    case SIGNUP_SUCCESS:
      return { ...state, requesting: false };

    case SIGNUP_FAILURE:
      return { ...state, requesting: false };

    default:
      return state;
  }
};
