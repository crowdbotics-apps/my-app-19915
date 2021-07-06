import {
  GET_EXERCISES,
  GET_EXERCISES_SUCCESS,
  GET_EXERCISES_FAILURE,
  MARK_FAVOURITE,
} from './types';

const initialState = {
  data: false,
  favourite: false,
  requesting: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_EXERCISES:
      return {...state, requesting: true};

    case GET_EXERCISES_SUCCESS:
      return {...state, requesting: false, data: action.data};

    case GET_EXERCISES_FAILURE:
      return {
        ...state,
        requesting: false,
      };

    case MARK_FAVOURITE:
      return {
        ...state,
        requesting: false,
        favourite: action.data,
      };

    default:
      return state;
  }
};
