import {
  GET_MORE_RESOURCES,
  GET_MORE_RESOURCES_SUCCESS,
  GET_MORE_RESOURCES_FAILURE,
} from './types';

export const getMoreResources = () => ({
  type: GET_MORE_RESOURCES,
});

export const getMoreResourcesSuccess = data => ({
  type: GET_MORE_RESOURCES_SUCCESS,
  data,
});

export const getMoreResourcesFailure = () => ({
  type: GET_MORE_RESOURCES_FAILURE,
});
