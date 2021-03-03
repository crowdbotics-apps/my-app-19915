import {
  LOGIN,
  RESET,
  SET_USER_DATA
} from './types';

export const login = data => ({
  type: LOGIN,
  data
});

export const setUserData = user => ({
  type: SET_USER_DATA,
  user
});

export const reset = () => ({
  type: RESET
});
