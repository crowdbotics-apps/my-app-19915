import {
    LOGIN,
    SET_USER_INFO,
    SET_AUTH_TOKEN,
    LOGIN_FAILURE,
    LOGOUT
} from './types';

export const login = (data) => ({
    type: LOGIN,
    data
  });

export const setAuthToken = token => ({
    type: SET_AUTH_TOKEN,
    token
});

export const setUserInfo = data => ({
    type: SET_USER_INFO,
    data
});

export const loginFailure = () => ({
    type: LOGIN_FAILURE,
  });

export const logout = () => ({
    type: LOGOUT
});
