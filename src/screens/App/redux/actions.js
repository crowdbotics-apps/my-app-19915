import {
  LOGIN,
  RESET_LOGIN,
  SET_USER_INFO,
  SET_AUTH_TOKEN,
  LOGIN_FAILURE,
  LOGOUT,
  FACEBOOK_LOGIN,
  SET_FACEBOOK_LOGIN,
  RESET_SERVER_ERROR,
} from './types';

export const login = (data) => ({
  type: LOGIN,
  data,
});

export const resetLogin = () => ({
  type: RESET_LOGIN,
});

export const facebookLogin = (accessToken) => ({
  type: FACEBOOK_LOGIN,
  accessToken,
});

export const setFacebookLogin = (isFbLogin) => ({
  type: SET_FACEBOOK_LOGIN,
  isFbLogin,
});

export const setAuthToken = (token) => ({
  type: SET_AUTH_TOKEN,
  token,
});

export const resetServerError = () => ({
  type: RESET_SERVER_ERROR,
});

export const setUserInfo = (data) => ({
  type: SET_USER_INFO,
  data,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  error,
});

export const logout = () => ({
  type: LOGOUT,
});
