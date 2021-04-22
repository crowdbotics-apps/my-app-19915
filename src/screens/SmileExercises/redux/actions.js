import {
  GET_EXERCISES,
  GET_EXERCISES_SUCCESS,
  GET_EXERCISES_FAILURE,
} from './types';

export const getExercises = () => ({
  type: GET_EXERCISES,
});

export const getExercisesSuccess = exercises => ({
  type: GET_EXERCISES_SUCCESS,
  exercises,
});

export const getExercisesFailure = () => ({
  type: GET_EXERCISES_FAILURE,
});
