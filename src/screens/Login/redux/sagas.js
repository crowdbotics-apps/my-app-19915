import {all, call, put, takeLatest} from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';

// config
import {appConfig} from 'src/config/app';

// utils
import XHR from 'src/utils/XHR';
import {errorAlert} from 'src/utils/alerts';

// types
import {LOGIN, FACEBOOK_LOGIN} from 'src/screens/App/redux/types';

// actions
import {
  setAuthToken,
  setUserInfo,
  loginFailure,
  setFacebookLogin,
  resetLogin,
} from 'src/screens/App/redux/actions';

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

function facebookLoginAPI(accessToken) {
  const URL = `${
    appConfig.backendServerURL
  }/login/facebook/`;
  const options = {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  };

  return XHR(URL, options);
}

function* login({data}) {
  try {
    const response = yield call(loginAPI, data);
    const res = response.data;
    const resp = {...res, user: {...res.user, password: data.password}};

    AsyncStorage.setItem('authToken', res.access);
    yield put(setAuthToken(res.access));
    yield put(setUserInfo(resp.user));
  } catch (e) {
    yield put(loginFailure('EMAIL OR PASSWORD IS INVALID'));
  }
}

function* facebookLogin({accessToken}) {
  try {
    const res = yield call(facebookLoginAPI, accessToken);

    AsyncStorage.setItem('authToken', res.data.token);
    AsyncStorage.setItem('user', JSON.stringify(res.data.user));

    yield put(setUserInfo(res.data.user));
    yield put(setAuthToken(res.data.token));
    yield put(setFacebookLogin(true));
  } catch (e) {
    const {response} = e;
    if (response && response.data.error) {
      errorAlert(response.data.error);
    } else {
      errorAlert('Unable to login with facebook, please try again later.');
    }
  } finally {
    yield put(resetLogin());
  }
}

export default all([
  takeLatest(LOGIN, login),
  takeLatest(FACEBOOK_LOGIN, facebookLogin),
]);
