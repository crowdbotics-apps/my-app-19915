import {
  SIGNUP,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE
} from './types';

export const signUp = data => ({
  type: SIGNUP,
  data
});

export const signUpSuccess = () => ({
  type: SIGNUP_SUCCESS
});

export const signUpFailure = (error) => ({
  type: SIGNUP_FAILURE,
  error
});
