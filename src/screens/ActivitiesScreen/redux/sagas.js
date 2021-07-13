import {all, call, put, takeLatest} from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import {showMessage} from 'react-native-flash-message';

// navigation service
import {navigate} from 'src/navigator/NavigationService';

// config
import {appConfig} from 'src/config/app';

// utils
import XHR from 'src/utils/XHR';

// types
import {GET_EXERCISES_ACTIVITIES, SELECT_ACTIVITIES} from './types';

// actions
import {
  getExercisesActivitiesSuccess,
  getExercisesActivitiesFailure,
  selectActivitiesSuccess,
  selectActivitiesFailure,
} from './actions';

async function getExercisesActivitiesAPI() {
  const URL = `${appConfig.backendServerURL}/api/v1/smile_exercise/`;
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

function* getActivities() {
  try {
    const response = yield call(getExercisesActivitiesAPI);
    const {data} = response;
    yield put(getExercisesActivitiesSuccess(data));
  } catch (e) {
    yield put(getExercisesActivitiesFailure());

    showMessage({
      message: 'Unable to load data, something went wrong.',
      type: 'danger',
    });
  }
}

async function selectActivitiesAPI(id) {
  const URL = `${appConfig.backendServerURL}/api/v1/smile_exercise/?exercise=${id}`;
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

function* selectActivities({item}) {
  try {
    const response = yield call(selectActivitiesAPI, item.id);
    const {data} = response;
    yield put(selectActivitiesSuccess(data));
    navigate('SmileExercises', {selectedActivity: item});
  } catch (e) {
    console.log(e);
    yield put(selectActivitiesFailure());

    showMessage({
      message: 'Unable to load data, something went wrong.',
      type: 'danger',
    });
  }
}

export default all([
  takeLatest(GET_EXERCISES_ACTIVITIES, getActivities),
  takeLatest(SELECT_ACTIVITIES, selectActivities),
]);
