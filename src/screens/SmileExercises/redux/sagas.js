import {all, call, put, takeLatest} from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import {showMessage} from 'react-native-flash-message';

// config
import {appConfig} from 'src/config/app';

// utils
import XHR from 'src/utils/XHR';

// types
import {GET_EXERCISES, MARK_FAVOURITE} from './types';

// actions
import {
  getExercisesSuccess,
  getExercisesFailure,
  markFavouriteSuccess,
  markFavouriteFailure,
} from './actions';

async function getExercisesAPI() {
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

function* getExercises() {
  try {
    const response = yield call(getExercisesAPI);
    const {data} = response;
    yield put(getExercisesSuccess(data[0]));
  } catch (e) {
    yield put(getExercisesFailure());

    showMessage({
      message: 'Unable to load data, something went wrong.',
      type: 'danger',
    });
  }
}

async function markFavouriteAPI(data) {
  const URL = `${appConfig.backendServerURL}/api/v1/smile_favorite/`;
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

function* markFavourity({data}) {
  try {
    yield call(markFavouriteAPI, data);
    yield put(markFavouriteSuccess(data));
  } catch (e) {
    console.log(e);
    yield put(markFavouriteFailure());
    showMessage({
      message: 'Unable to load data, something went wrong.',
      type: 'danger',
    });
  }
}

export default all([
  takeLatest(GET_EXERCISES, getExercises),
  takeLatest(MARK_FAVOURITE, markFavourity),
]);
