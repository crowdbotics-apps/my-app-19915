import {GET_QUOTE, GET_QUOTE_SUCCESS, GET_QUOTE_FAILURE} from './types';

export const getQuote = () => ({
  type: GET_QUOTE,
});

export const getQuoteSuccess = (data) => ({
  type: GET_QUOTE_SUCCESS,
  data,
});

export const getQuoteFailure = () => ({
  type: GET_QUOTE_FAILURE,
});
