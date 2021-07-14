import {
  POST_STEP_THREE,
  POST_STEP_THREE_SUCCESS,
  POST_STEP_THREE_FAILURE,
  SET_AUTH_TOKEN,
} from './types';

const initialState = {
  requesting: false,
  authToken: false,
  stepThreeData: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case POST_STEP_THREE:
      return {...state, requesting: true};

    case POST_STEP_THREE_SUCCESS:
      return {...state, requesting: false, stepThreeData: action.data};

    case SET_AUTH_TOKEN:
      return {...state, authToken: action.token};

    case POST_STEP_THREE_FAILURE:
      return {
        ...state,
        requesting: false,
      };

    default:
      return state;
  }
};
