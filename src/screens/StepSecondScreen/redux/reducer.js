import {
  POST_STEP_TWO,
  POST_STEP_TWO_SUCCESS,
  POST_STEP_TWO_FAILURE,
} from './types';

const initialState = {
  requesting: false,
  stepTwoData: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case POST_STEP_TWO:
      return {...state, requesting: true};

    case POST_STEP_TWO_SUCCESS:
      return {...state, requesting: false, stepTwoData: action.data};

    case POST_STEP_TWO_FAILURE:
      return {
        ...state,
        requesting: false,
      };

    default:
      return state;
  }
};
