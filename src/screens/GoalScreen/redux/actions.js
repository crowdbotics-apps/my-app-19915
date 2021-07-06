import {
  GET_GOALS_DATA,
  GET_GOALS_DATA_SUCCESS,
  GET_GOALS_DATA_FAILURE,
  GET_LEVEL_DATA,
  GET_LEVEL_DATA_SUCCESS,
  GET_LEVEL_DATA_FAILURE,
  GET_STREAKS,
  GET_STREAKS_SUCCESS,
  GET_STREAKS_FAILURE,
} from './types';

export const getGoals = () => ({
  type: GET_GOALS_DATA,
});

export const getGoalsDataSuccess = (data) => ({
  type: GET_GOALS_DATA_SUCCESS,
  data,
});

export const getGoalsDataFailure = () => ({
  type: GET_GOALS_DATA_FAILURE,
});

export const getLevels = () => ({
  type: GET_LEVEL_DATA,
});

export const getLevelsDataSuccess = (data) => ({
  type: GET_LEVEL_DATA_SUCCESS,
  data,
});

export const getLevelsDataFailure = () => ({
  type: GET_LEVEL_DATA_FAILURE,
});

export const getStreaks = () => ({
  type: GET_STREAKS,
});

export const getStreaksDataSuccess = (data) => ({
  type: GET_STREAKS_SUCCESS,
  data,
});

export const getStreaksDataFailure = () => ({
  type: GET_STREAKS_FAILURE,
});
