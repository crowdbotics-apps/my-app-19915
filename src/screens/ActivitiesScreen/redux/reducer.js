import {
  GET_EXERCISES_ACTIVITIES,
  GET_EXERCISES_ACTIVITIES_SUCCESS,
  GET_EXERCISES_ACTIVITIES_FAILURE,
  SELECT_ACTIVITIES,
  SELECT_ACTIVITIES_SUCCESS,
  SELECT_ACTIVITIES_FAILURE,
} from './types';

const initialState = {
  requesting: false,
  activitiesExercises: false,
  selectActivity:false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_EXERCISES_ACTIVITIES:
      return {...state, requesting: true};

    case GET_EXERCISES_ACTIVITIES_SUCCESS:
      return {...state, requesting: false, activitiesExercises: action.data};

    case GET_EXERCISES_ACTIVITIES_FAILURE:
      return {
        ...state,
        requesting: false,
      };

      case SELECT_ACTIVITIES:
      return {...state, requesting: true};

    case SELECT_ACTIVITIES_SUCCESS:
      return {...state, requesting: false, selectActivity: action.data};

    case SELECT_ACTIVITIES_FAILURE:
      return {
        ...state,
        requesting: false,
      };

    default:
      return state;
  }
};
