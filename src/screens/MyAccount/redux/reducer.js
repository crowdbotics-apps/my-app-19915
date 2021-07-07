import {
  GET_PROFILE,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAILURE,
  UPDATE_PROFILE,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAILURE,
} from './types';

const initialState = {
  requesting: false,
  profileData: false,
  updatedProfile: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE:
      return {...state, requesting: true};

    case GET_PROFILE_SUCCESS:
      return {...state, requesting: false, profileData: action.data};

    case GET_PROFILE_FAILURE:
      return {
        ...state,
        requesting: false,
      };

    case UPDATE_PROFILE:
      return {...state, requesting: true};

    case UPDATE_PROFILE_SUCCESS:
      return {...state, requesting: false, updatedProfile: action.data};

    case UPDATE_PROFILE_FAILURE:
      return {
        ...state,
        requesting: false,
      };

    default:
      return state;
  }
};
