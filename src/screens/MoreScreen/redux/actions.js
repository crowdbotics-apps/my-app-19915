import {
  GET_MORE_RESOURCES,
  GET_MORE_RESOURCES_SUCCESS,
  GET_MORE_RESOURCES_FAILURE,
  GET_SELECTED_RESOURCE,
  GET_SELECTED_RESOURCE_SUCCESS,
  GET_SELECTED_RESOURCE_FAILURE

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

export const getSelectedResources = (item) => ({
  type: GET_SELECTED_RESOURCE,
  item
});

export const getSelectedResourcesSuccess = data => ({
  type: GET_SELECTED_RESOURCE_SUCCESS,
  data,
});

export const getSelectedResourcesFailure = () => ({
  type: GET_SELECTED_RESOURCE_FAILURE,
});
