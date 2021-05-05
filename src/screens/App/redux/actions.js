import {
    LOGIN,
    SET_USER_INFO,
    SET_AUTH_TOKEN,
    LOGIN_FAILURE,
    LOGOUT,
    USER_LOGIN_SOCIAL_REQUESTED,
    RESET_SERVER_ERROR
} from './types';

export const login = (data) => ({
    type: LOGIN,
    data
  });

  export const socialLoginAction = data => ({
    type: USER_LOGIN_SOCIAL_REQUESTED,
    data,
  });

export const setAuthToken = token => ({
    type: SET_AUTH_TOKEN,
    token
});


export const resetServerError =  () => ({
  type:  RESET_SERVER_ERROR,
});

export const setUserInfo = data => ({
    type: SET_USER_INFO,
    data
});

export const loginFailure = (error) => ({
    type: LOGIN_FAILURE,
    error
  });

export const logout = () => ({
    type: LOGOUT
});
