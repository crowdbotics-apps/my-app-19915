import {GET_SCIENCE, GET_SCIENCE_SUCCESS, GET_SCIENCE_FAILURE} from './types';

export const getSciences = () => ({
  type: GET_SCIENCE,
});

export const getSciencesSuccess = (data) => ({
  type: GET_SCIENCE_SUCCESS,
  data,
});

export const getSciencesFailure = () => ({
  type: GET_SCIENCE_FAILURE,
});
