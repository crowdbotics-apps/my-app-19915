import {all, call, put, takeLatest} from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import {showMessage} from 'react-native-flash-message';

// config
import {appConfig} from 'src/config/app';

// utils
import XHR from 'src/utils/XHR';

// types
import {GET_EXERCISES} from './types';

// actions
import {getExercisesSuccess, getExercisesFailure} from './actions';

async function getExercisesAPI() {
  const URL = `${appConfig.backendServerURL}/api/v1/smile_exercise/`;
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

function* getExercises() {
  try {
    const response = yield call(getExercisesAPI);
    yield put(getExercisesSuccess());
  } catch (e) {
    yield put(getExercisesFailure());

    showMessage({
      message: 'Unable to load data, something went wrong.',
      type: 'danger',
    });
  }
}

export default all([takeLatest(GET_EXERCISES, getExercises)]);
