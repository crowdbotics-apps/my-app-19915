import { all, call, put, takeLatest } from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';

import { showMessage } from 'react-native-flash-message';

// config
import { appConfig } from '../../../config/app';

// utils
import XHR from '../../../utils/XHR';

// types
import { LOGIN } from './types';

// actions
import {
  reset,
  setUserData
} from './actions';

function loginAPI(data) {
  const URL = `${appConfig.backendServerURL}/api/v1/token/login/`;
  const options = {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    data,
  };

  return XHR(URL, options);
}

function* login({ data }) {
  try {
    const response = yield call(loginAPI, data);
    const { user } = response;

    AsyncStorage.setItem('authToken', user);

    yield put(setUserData(user));
  } catch (e) {
    yield put(reset());

    showMessage({
      message: 'Unable to login, something went wrong.',
      type: 'danger',
    });
  }
}

export default all([takeLatest(LOGIN, login)]);
