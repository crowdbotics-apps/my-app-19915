import {
  POST_STEP_THREE,
  POST_STEP_THREE_SUCCESS,
  POST_STEP_THREE_FAILURE,
  SET_AUTH_TOKEN
} from './types';

export const postStepThree = (data, user) => ({
  type: POST_STEP_THREE,
  data,
  user
});

export const postStepThreeSuccess = (data) => ({
  type: POST_STEP_THREE_SUCCESS,
  data
});

export const setAuthToken = token => ({
  type: SET_AUTH_TOKEN,
  token,
});

export const postStepThreeFailure = () => ({
  type: POST_STEP_THREE_FAILURE,
});
