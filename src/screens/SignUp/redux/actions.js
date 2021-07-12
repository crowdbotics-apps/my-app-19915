import {
  SIGNUP,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  RESET_SERVER_ERROR,
  SET_USER_INFO,
} from './types';

export const signUp = (data) => ({
  type: SIGNUP,
  data,
});

export const resetServerError = () => ({
  type: RESET_SERVER_ERROR,
});

export const signUpSuccess = (data) => ({
  type: SIGNUP_SUCCESS,
  data,
});

export const setUserInfo = (data) => ({
  type: SET_USER_INFO,
  data,
});

export const signUpFailure = (error) => ({
  type: SIGNUP_FAILURE,
  error,
});
