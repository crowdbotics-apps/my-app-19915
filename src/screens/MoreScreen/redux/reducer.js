import {
  GET_MORE_RESOURCES,
  GET_MORE_RESOURCES_SUCCESS,
  GET_MORE_RESOURCES_FAILURE,
  GET_SELECTED_RESOURCE,
  GET_SELECTED_RESOURCE_SUCCESS,
  GET_SELECTED_RESOURCE_FAILURE,
} from './types';

const initialState = {
  requesting: false,
  resources: false,
  selectedResource: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MORE_RESOURCES:
      return {...state, requesting: true};

    case GET_MORE_RESOURCES_SUCCESS:
      return {...state, requesting: false, resources: action.data};

    case GET_MORE_RESOURCES_FAILURE:
      return {
        ...state,
        requesting: false,
      };

    case GET_SELECTED_RESOURCE:
      return {...state, selectedResource: true};

    case GET_SELECTED_RESOURCE_SUCCESS:
      return {...state, requesting: false, selectedResource: action.data};

    case GET_SELECTED_RESOURCE_FAILURE:
      return {
        ...state,
        requesting: false,
      };

    default:
      return state;
  }
};
