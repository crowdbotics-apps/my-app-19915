import {
  GET_QUOTE,
  GET_QUOTE_SUCCESS,
  GET_QUOTE_FAILURE,
} from './types';

const initialState = {
  requesting: false,
  quote: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_QUOTE:
      return {...state, requesting: true};

    case GET_QUOTE_SUCCESS:
      return {...state, requesting: false, quote: action.quote};

    case GET_QUOTE_FAILURE:
      return {
        ...state,
        requesting: false,
      };

    default:
      return state;
  }
};
