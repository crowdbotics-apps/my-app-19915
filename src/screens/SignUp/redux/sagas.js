import { all, call, put, takeLatest } from 'redux-saga/effects';

import { showMessage } from 'react-native-flash-message';

// services
import { navigate } from 'src/navigator/NavigationService';

// config
import { appConfig } from '../../../config/app';

// utils
import XHR from '../../../utils/XHR';

// types
import { SIGNUP } from './types';

// actions
import {
  signUpSuccess,
  signUpFailure
} from './actions';

function signUpAPI(data) {
  const URL = `${appConfig.backendServerURL}/api/v1/token/signup/`;
  const options = {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    data,
  };

  return XHR(URL, options);
}

function* signUp({ data }) {
  try {
    const response = yield call(signUpAPI, data);
    yield put(signUpSuccess(data));
    navigate("Login")
    
  } catch (e) {
    const { response } = e;
if (e.response){
  yield put(signUpFailure(response.data.email));
  }
  else {
    showMessage({
      message: 'oops! Unable to signup. Something went wrong',
      type: 'danger',
    });
  }
  }
}

export default all([takeLatest(SIGNUP, signUp)]);
