import {
  GET_QUOTE,
  GET_QUOTE_SUCCESS,
  GET_QUOTE_FAILURE,
} from './types';

const initialState = {
  requesting: false,
  data: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_QUOTE:
      return {...state, requesting: true};

    case GET_QUOTE_SUCCESS:
      return {...state, requesting: false, data: action.data};

    case GET_QUOTE_FAILURE:
      return {
        ...state,
        requesting: false,
      };

    default:
      return state;
  }
};
