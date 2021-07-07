import {
  POST_STEP_TWO
} from './types';

const initialState = {
  stepTwoData: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case POST_STEP_TWO:
      return {...state, stepTwoData: action.data };

    default:
      return state;
  }
};
