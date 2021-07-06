import {
  GET_EXERCISES,
  GET_EXERCISES_SUCCESS,
  GET_EXERCISES_FAILURE,
  MARK_FAVOURITE,
} from './types';

export const getExercises = () => ({
  type: GET_EXERCISES,
});

export const getExercisesSuccess = data => ({
  type: GET_EXERCISES_SUCCESS,
  data,
});

export const getExercisesFailure = () => ({
  type: GET_EXERCISES_FAILURE,
});

export const markFavourite = (data) => ({
  type: MARK_FAVOURITE,
  data
});
