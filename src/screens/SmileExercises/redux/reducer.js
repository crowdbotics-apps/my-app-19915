import {
  GET_EXERCISES,
  GET_EXERCISES_SUCCESS,
  GET_EXERCISES_FAILURE,
} from './types';

const initialState = {
  requesting: false,
  exercises: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_EXERCISES:
      return {...state, requesting: true};

    case GET_EXERCISES_SUCCESS:
      return {...state, requesting: false, exercises: action.exercises};

    case GET_EXERCISES_FAILURE:
      return {
        ...state,
        requesting: false,
      };

    default:
      return state;
  }
};
