import { LOGIN, RESET, SET_USER_DATA } from './types';

const initialState = {
  user: false,
  requesting: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, requesting: true };

    case SET_USER_DATA:
      return { ...state, requesting: false, user: action.user };

    case RESET:
      return {
        ...state,
        requesting: false
      };

    default:
      return state;
  }
};
