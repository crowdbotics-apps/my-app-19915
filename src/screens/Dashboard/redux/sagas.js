import {all, call, put, takeLatest, select} from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import {showMessage} from 'react-native-flash-message';

// config
import {appConfig} from 'src/config/app';

// utils
import XHR from 'src/utils/XHR';

// types
import {GET_DASHBOARD_DATA, UPDATE_SMILE_DATA} from './types';

// actions
import {
  getDashBoardDataSuccess,
  getDashBoardDataFailure,
  resetSmileData,
} from './actions';

// state
const getDashboard = state => state.dashboard.data;

async function getDashboardDataAPI() {
  const URL = `${appConfig.backendServerURL}/api/v1/smile_dashboard/`;
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

function* getDashboardData() {
  try {
    const response = yield call(getDashboardDataAPI);
    const {data} = response;

    yield put(getDashBoardDataSuccess(data));
  } catch (e) {
    yield put(getDashBoardDataFailure());

    showMessage({
      message: 'Unable to load data, something went wrong.',
      type: 'danger',
    });
  }
}

async function updateSmileDataAPI(data) {
  const URL = `${appConfig.backendServerURL}/api/v1/smile_dashboard/`;
  const authToken = await AsyncStorage.getItem('authToken');

  const options = {
    headers: {
      Authorization: 'Token ' + authToken,
      'Content-Type': 'application/json',
    },
    method: 'POST',
    data,
  };

  return XHR(URL, options);
}

 function* updateSmileData({data, navigation}) {
  try {
    const { second,count } = data;
    if (second && count > 0) {
      yield call(updateSmileDataAPI, data);

      const dashboardData = yield select(getDashboard);

      let clonedData = {
        ...dashboardData,
        best_day: { ...dashboardData.best_day },
        dashboard: {
          ...dashboardData.dashboard,
          total_second: dashboardData.dashboard.total_second + second,
          total_count: dashboardData.dashboard.total_count + count
        }
      };

      yield put(getDashBoardDataSuccess(clonedData));
      navigation.goBack()
    }
    yield put(resetSmileData());
  } catch (e) {
    yield put(resetSmileData());

    showMessage({
      message: 'Unable to update data, something went wrong.',
      type: 'danger',
    });
  }
}

export default all([
  takeLatest(GET_DASHBOARD_DATA, getDashboardData),
  takeLatest(UPDATE_SMILE_DATA, updateSmileData),
]);
