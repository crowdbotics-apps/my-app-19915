import {
  POST_STEP_TWO,
  POST_STEP_TWO_SUCCESS,
  POST_STEP_TWO_FAILURE,
} from './types';

export const postStepTwo = () => ({
  type: POST_STEP_TWO,
});

export const postStepTwoSuccess = data => ({
  type: POST_STEP_TWO_SUCCESS,
  data,
});

export const postStepTwoFailure = () => ({
  type: POST_STEP_TWO_FAILURE,
});
