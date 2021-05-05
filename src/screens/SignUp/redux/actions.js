import {
  SIGNUP,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  RESET_SERVER_ERROR,
} from './types';

export const signUp = data => ({
  type: SIGNUP,
  data
});

export const resetServerError =  () => ({
  type:  RESET_SERVER_ERROR,
});

export const signUpSuccess = () => ({
  type: SIGNUP_SUCCESS
});

export const signUpFailure = (error) => ({
  type: SIGNUP_FAILURE,
  error
});
