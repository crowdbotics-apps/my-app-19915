import {
  GET_DASHBOARD_DATA,
  GET_DASHBOARD_DATA_SUCCESS,
  GET_DASHBOARD_DATA_FAILURE,
  UPDATE_SMILE_DATA,
  RESET_SMILE_DATA,
} from './types';

export const getDashboard = () => ({
  type: GET_DASHBOARD_DATA,
});

export const getDashBoardDataSuccess = (data) => ({
  type: GET_DASHBOARD_DATA_SUCCESS,
  data,
});

export const getDashBoardDataFailure = () => ({
  type: GET_DASHBOARD_DATA_FAILURE,
});

export const updateSmileData = (data) => ({
  type: UPDATE_SMILE_DATA,
  data,
});

export const resetSmileData = () => ({
  type: RESET_SMILE_DATA,
});
