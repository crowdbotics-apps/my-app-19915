import {
  GET_COMMUNITY,
  GET_COMMUNITY_SUCCESS,
  GET_COMMUNITY_FAILURE,
} from './types';

const initialState = {
  requesting: false,
  community: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMUNITY:
      return {...state, requesting: true};

    case GET_COMMUNITY_SUCCESS:
      return {...state, requesting: false, community: action.community};

    case GET_COMMUNITY_FAILURE:
      return {
        ...state,
        requesting: false,
      };

    default:
      return state;
  }
};
