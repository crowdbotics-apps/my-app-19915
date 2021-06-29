import {
  POST_STEP_THREE,
  POST_STEP_THREE_SUCCESS,
  POST_STEP_THREE_FAILURE,
} from './types';

export const postStepThree = () => ({
  type: POST_STEP_THREE,
});

export const postStepThreeSuccess = data => ({
  type: POST_STEP_THREE_SUCCESS,
  data,
});

export const postStepThreeFailure = () => ({
  type: POST_STEP_THREE_FAILURE,
});
