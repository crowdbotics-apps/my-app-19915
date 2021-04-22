import {
  GET_QUOTE,
  GET_QUOTE_SUCCESS,
  GET_QUOTE_FAILURE,
} from './types';

export const getQuote = () => ({
  type: GET_QUOTE,
});

export const getQuoteSuccess = quote => ({
  type: GET_QUOTE_SUCCESS,
  quote,
});

export const getQuoteFailure = () => ({
  type: GET_QUOTE_FAILURE,
});
