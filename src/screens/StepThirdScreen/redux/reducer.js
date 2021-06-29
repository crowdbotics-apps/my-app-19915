import {
  POST_STEP_THREE,
  POST_STEP_THREE_SUCCESS,
  POST_STEP_THREE_FAILURE,
} from './types';

const initialState = {
  requesting: false,
  stepThreeData: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case POST_STEP_THREE:
      return {...state, requesting: true};

    case POST_STEP_THREE_SUCCESS:
      return {...state, requesting: false, stepThreeData: action.data};

    case POST_STEP_THREE_FAILURE:
      return {
        ...state,
        requesting: false,
      };

    default:
      return state;
  }
};
