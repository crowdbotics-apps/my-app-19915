import {
  GET_DASHBOARD_DATA,
  GET_DASHBOARD_DATA_SUCCESS,
  GET_DASHBOARD_DATA_FAILURE,
} from './types';

export const getDashboard = () => ({
  type: GET_DASHBOARD_DATA,
});

export const getDashBoardDataSuccess = data => ({
  type: GET_DASHBOARD_DATA_SUCCESS,
  data,
});

export const getDashBoardDataFailure = () => ({
  type: GET_DASHBOARD_DATA_FAILURE,
});
