import {all, call, put, takeLatest} from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import {showMessage} from 'react-native-flash-message';
import * as NavigationService from 'src/navigator/NavigationService';

// config
import {appConfig} from 'src/config/app';

// utils
import XHR from 'src/utils/XHR';

// types
import {GET_PROFILE, UPDATE_PROFILE} from './types';

// actions
import {
  getProfileSuccess,
  getProfileFailure,
  updateProfileSuccess,
  updateProfileFailure,
} from './actions';

async function getProfileDataAPI() {
  const URL = `${appConfig.backendServerURL}/api/v1/user_profile/`;
  const authToken = await AsyncStorage.getItem('authToken');

  const options = {
    headers: {
      Authorization: 'Token ' + authToken,
      'Content-Type': 'application/json',
    },
    method: 'GET',
  };
  return XHR(URL, options);
}

function* getProfileData() {
  try {
    const response = yield call(getProfileDataAPI);
    if (response.data.length) {
      yield put(getProfileSuccess(response.data[0]));
    } else {
      yield put(getProfileSuccess(false));
    }
  } catch (e) {
    yield put(getProfileFailure());

    showMessage({
      message: 'Unable to load data, something went wrong.',
      type: 'danger',
    });
  }
}

async function updateProfileDataAPI(data, id) {
  const URL = `${appConfig.backendServerURL}/api/v1/user_profile/${id}/`;
  const authToken = await AsyncStorage.getItem('authToken');
  console.log('URL', URL);

  const options = {
    headers: {
      Authorization: 'Token ' + authToken,
      'Content-Type': 'application/json',
    },
    method: 'PATCH',
    data,
  };

  return XHR(URL, options);
}

function* updateProfileData({data, user}) {
  try {
    const response = yield call(updateProfileDataAPI, data, user.id);
    yield put(updateProfileSuccess(data));
    showMessage({
      message: 'Profile updated successfully.',
      type: 'success',
    });
  } catch (e) {
    const {response} = e;
    console.log('error', e);
    yield put(updateProfileFailure());
    showMessage({
      message: 'Unable to load data, something went wrong.',
      type: 'danger',
    });
  }
}

export default all([
  takeLatest(GET_PROFILE, getProfileData),
  takeLatest(UPDATE_PROFILE, updateProfileData),
]);
