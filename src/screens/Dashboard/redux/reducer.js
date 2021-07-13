import {
  GET_DASHBOARD_DATA,
  GET_DASHBOARD_DATA_SUCCESS,
  GET_DASHBOARD_DATA_FAILURE,
  UPDATE_SMILE_DATA,
  RESET_SMILE_DATA,
} from './types';

const initialState = {
  requesting: false,
  data: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_DASHBOARD_DATA:
      return {...state, requesting: true};

    case GET_DASHBOARD_DATA_SUCCESS:
      return {...state, requesting: false, data: action.data};

    case GET_DASHBOARD_DATA_FAILURE:
      return {
        ...state,
        requesting: false,
      };

    case UPDATE_SMILE_DATA:
      return {...state, requesting: true};

    case RESET_SMILE_DATA:
      return {
        ...state,
        requesting: false,
      };

    default:
      return state;
  }
};
