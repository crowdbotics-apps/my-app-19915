import {
  GET_GOALS_DATA,
  GET_GOALS_DATA_SUCCESS,
  GET_GOALS_DATA_FAILURE,
  GET_LEVEL_DATA,
  GET_LEVEL_DATA_SUCCESS,
  GET_LEVEL_DATA_FAILURE,
  GET_STREAKS,
  GET_STREAKS_SUCCESS,
  GET_STREAKS_FAILURE,
} from './types';

const initialState = {
  requesting: false,
  smileGoals: false,
  smileLevel: false,
  streaks: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_GOALS_DATA:
      return {...state, requesting: true};

    case GET_GOALS_DATA_SUCCESS:
      return {...state, requesting: false, smileGoals: action.data};

    case GET_GOALS_DATA_FAILURE:
      return {
        ...state,
        requesting: false,
      };

    case GET_LEVEL_DATA:
      return {...state, requesting: true};

    case GET_LEVEL_DATA_SUCCESS:
      return {...state, requesting: false, smileLevel: action.data};

    case GET_LEVEL_DATA_FAILURE:
      return {
        ...state,
        requesting: false,
      };

    case GET_STREAKS:
      return {...state, requesting: true};

    case GET_STREAKS_SUCCESS:
      return {...state, requesting: false, streaks: action.data};

    case GET_STREAKS_FAILURE:
      return {
        ...state,
        requesting: false,
      };

    default:
      return state;
  }
};
