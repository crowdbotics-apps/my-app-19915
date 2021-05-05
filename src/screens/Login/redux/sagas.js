import {all, call, put, takeLatest} from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import {showMessage} from 'react-native-flash-message';
import {loginSocial} from 'src/services/ApiService'
// services
import { navigate } from 'src/navigator/NavigationService';

// config
import {appConfig} from '../../../config/app';

// utils
import XHR from '../../../utils/XHR';

// types
import {LOGIN} from '../../App/redux/types';

// actions
import {setAuthToken, setUserInfo, loginFailure} from '../../App/redux/actions';

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

function* login({data}) {
  try {
    const response = yield call(loginAPI, data);
    const res = response.data;
    const resp = { ...res, user: { ...res.user, password: data.password } }

    AsyncStorage.setItem('authToken', res.access);
    yield put(setAuthToken(res.access));
    yield put(setUserInfo(resp.user));
  } catch (e) {
    yield put(loginFailure('EMAIL OR PASSWORD IS INVALID'));
  }
}

function* handleSocialLogin({data,navigation}) {
  try {
    const response = yield call(loginSocial, data);
    if (response.status === 200) {
      yield saveToken(response.data.key);
      yield setupHttp();
    }
    yield put({type: USER_LOGIN_SUCCEEDED});
  } catch (error) {
    yield put({
      type: USER_LOGIN_FAILED,
      error: error.message,
    });
  }
}

export default all([takeLatest(LOGIN, login)]);
