import {
  POST_STEP_ONE,
} from './types';

const initialState = {
  stepOneData: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case POST_STEP_ONE:
      return {...state, stepOneData: action.data};


    default:
      return state;
  }
};
