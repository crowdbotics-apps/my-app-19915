import {all, call, put, takeLatest} from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import {showMessage} from 'react-native-flash-message';

// config
import {appConfig} from 'src/config/app';

// utils
import XHR from 'src/utils/XHR';

// types
import {GET_DASHBOARD_DATA} from './types';

// actions
import {getDashBoardDataSuccess, getDashBoardDataFailure} from './actions';

async function getDashboardDataAPI() {
  const URL = `${appConfig.backendServerURL}/api/v1/smile_dashboard/?days=0`;
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

function* getDashboardData() {
  try {
    const response = yield call(getDashboardDataAPI);
    const { data }= response;

    yield put(getDashBoardDataSuccess(data));
  } catch (e) {
    yield put(getDashBoardDataFailure());

    showMessage({
      message: 'Unable to load data, something went wrong.',
      type: 'danger',
    });
  }
}

export default all([takeLatest(GET_DASHBOARD_DATA, getDashboardData)]);
