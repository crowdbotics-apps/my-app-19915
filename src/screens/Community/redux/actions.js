import {
  GET_COMMUNITY,
  GET_COMMUNITY_SUCCESS,
  GET_COMMUNITY_FAILURE,
} from './types';

export const getCommunity = () => ({
  type: GET_COMMUNITY,
});

export const getCommunitySuccess = quote => ({
  type: GET_COMMUNITY_SUCCESS,
  quote,
});

export const getCommunityFailure = () => ({
  type: GET_COMMUNITY_FAILURE,
});
