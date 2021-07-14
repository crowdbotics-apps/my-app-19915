import {all, call, put, takeLatest} from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import {showMessage} from 'react-native-flash-message';

// config
import {appConfig} from 'src/config/app';

// utils
import XHR from 'src/utils/XHR';

// types
import {GET_QUOTE} from './types';

// actions
import {getQuoteSuccess, getQuoteFailure} from './actions';

async function getQuoteAPI() {
  const URL = `${appConfig.backendServerURL}/api/v1/quote/`;
  const authToken = await AsyncStorage.getItem('authToken');

  const options = {
    headers: {
      Authorization: 'Bearer ' + authToken,
      'Content-Type': 'application/json',
    },
    method: 'GET',
  };
  return XHR(URL, options);
}

function* getQuote() {
  try {
    const response = yield call(getQuoteAPI);
    const {data} = response;
    yield put(getQuoteSuccess(data));
  } catch (e) {
    yield put(getQuoteFailure());

    showMessage({
      message: 'Unable to load data, something went wrong.',
      type: 'danger',
    });
  }
}

export default all([takeLatest(GET_QUOTE, getQuote)]);
