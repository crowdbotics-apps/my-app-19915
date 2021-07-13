import {
  GET_EXERCISES_ACTIVITIES,
  GET_EXERCISES_ACTIVITIES_SUCCESS,
  GET_EXERCISES_ACTIVITIES_FAILURE,
  SELECT_ACTIVITIES,
  SELECT_ACTIVITIES_SUCCESS,
  SELECT_ACTIVITIES_FAILURE,
} from './types';

export const getExercisesActivities = () => ({
  type: GET_EXERCISES_ACTIVITIES,
});

export const getExercisesActivitiesSuccess = (data) => ({
  type: GET_EXERCISES_ACTIVITIES_SUCCESS,
  data,
});

export const getExercisesActivitiesFailure = () => ({
  type: GET_EXERCISES_ACTIVITIES_FAILURE,
});

export const selectActivities = (item) => ({
  type: SELECT_ACTIVITIES,
  item,
});

export const selectActivitiesSuccess = (data) => ({
  type: SELECT_ACTIVITIES_SUCCESS,
  data,
});

export const selectActivitiesFailure = () => ({
  type: SELECT_ACTIVITIES_FAILURE,
});
