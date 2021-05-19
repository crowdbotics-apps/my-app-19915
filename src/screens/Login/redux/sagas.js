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
  const data = {access_token:accessToken}
  const URL = `${
    appConfig.backendServerURL
  }/api/v1/login/facebook/`;
  const options = {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    data
  };

  return XHR(URL, options);
}

function* login({data}) {
  try {
    const response = yield call(loginAPI, data);
    const res = response.data;
    const resp = {...res, user_detail: {...res.user_detail, password: data.password}};

    AsyncStorage.setItem('authToken', res.key);
    yield put(setAuthToken(res.key));
    yield put(setUserInfo(resp.user_detail));
  } catch (e) {
    yield put(loginFailure('EMAIL OR PASSWORD IS INVALID'));
  }
}

function* facebookLogin({accessToken}) {
  try {
    const res = yield call(facebookLoginAPI, accessToken);
console.log('res from saga',res.data);
    AsyncStorage.setItem('authToken', res.data.key);
    //AsyncStorage.setItem('user', JSON.stringify(res.data.user_detail));
    //yield put(setUserInfo(res.data.user_detail));
    yield put(setAuthToken(res.data.key));
    yield put(setFacebookLogin(true));
  } catch (e) {
    console.log('error from saga',e);
    const {response} = e;
    if (response && response.data.error) {
      errorAlert(response.data.error);
    } else {
      errorAlert('Unable to login with facebook, please try again later.');
    }
  }
}

export default all([
  takeLatest(LOGIN, login),
  takeLatest(FACEBOOK_LOGIN, facebookLogin),
]);
