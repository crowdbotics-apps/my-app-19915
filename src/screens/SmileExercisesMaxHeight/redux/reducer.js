import {
  GET_SCIENCE,
  GET_SCIENCE_SUCCESS,
  GET_SCIENCE_FAILURE,
} from './types';

const initialState = {
  requesting: false,
  data: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SCIENCE:
      return {...state, requesting: true};

    case GET_SCIENCE_SUCCESS:
      return {...state, requesting: false, data: action.data};

    case GET_SCIENCE_FAILURE:
      return {
        ...state,
        requesting: false,
      };

    default:
      return state;
  }
};
