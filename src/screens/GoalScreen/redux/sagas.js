import {all, call, put, takeLatest} from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import {showMessage} from 'react-native-flash-message';

// config
import {appConfig} from 'src/config/app';

// utils
import XHR from 'src/utils/XHR';

// types
import {GET_GOALS_DATA, GET_LEVEL_DATA, GET_STREAKS} from './types';

// actions
import {
  getGoalsDataSuccess,
  getGoalsDataFailure,
  getLevelsDataSuccess,
  getLevelsDataFailure,
  getStreaksDataSuccess,
  getStreaksDataFailure,
} from './actions';

async function getGoalsDataAPI() {
  const URL = `${appConfig.backendServerURL}/api/v1/goal/`;
  const authToken = await AsyncStorage.getItem('authToken');
  console.log('Token', authToken);
  const options = {
    headers: {
      Authorization: 'Token ' + authToken,
      'Content-Type': 'application/json',
    },
    method: 'GET',
  };
  return XHR(URL, options);
}

function* getGoalsData() {
  try {
    const response = yield call(getGoalsDataAPI);
    const {data} = response;

    yield put(getGoalsDataSuccess(data));
  } catch (e) {
    yield put(getGoalsDataFailure());

    showMessage({
      message: 'Unable to load data, something went wrong.',
      type: 'danger',
    });
  }
}

async function getLevelsDataAPI() {
  const URL = `${appConfig.backendServerURL}/api/v1/smile_level/`;
  const authToken = await AsyncStorage.getItem('authToken');
  console.log('Token', authToken);
  const options = {
    headers: {
      Authorization: 'Token ' + authToken,
      'Content-Type': 'application/json',
    },
    method: 'GET',
  };
  return XHR(URL, options);
}

function* getLevelsData() {
  try {
    const response = yield call(getLevelsDataAPI);
    const {data} = response;

    yield put(getLevelsDataSuccess(data));
  } catch (e) {
    console.log('error', e);
    yield put(getLevelsDataFailure());

    showMessage({
      message: 'Unable to load data, something went wrong.',
      type: 'danger',
    });
  }
}

async function getStreaksDataAPI() {
  const URL = `${appConfig.backendServerURL}/api/v1/smile_dashboard/`;
  const authToken = await AsyncStorage.getItem('authToken');
  console.log('Token', authToken);
  const options = {
    headers: {
      Authorization: 'Token ' + authToken,
      'Content-Type': 'application/json',
    },
    method: 'GET',
  };
  return XHR(URL, options);
}

function* getStreaksData() {
  try {
    const response = yield call(getStreaksDataAPI);
    const {data} = response;

    yield put(getStreaksDataSuccess(data));
  } catch (e) {
    console.log('error', e);
    yield put(getStreaksDataFailure());

    showMessage({
      message: 'Unable to load data, something went wrong.',
      type: 'danger',
    });
  }
}

export default all([
  takeLatest(GET_GOALS_DATA, getGoalsData),
  takeLatest(GET_LEVEL_DATA, getLevelsData),
  takeLatest(GET_STREAKS, getStreaksData),
]);
