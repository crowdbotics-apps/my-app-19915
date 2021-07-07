import {all, call, put, takeLatest} from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import {showMessage} from 'react-native-flash-message';

// config
import {appConfig} from 'src/config/app';

// utils
import XHR from 'src/utils/XHR';

// types
import {GET_SCIENCE} from './types';

// actions
import {getSciencesSuccess, getSciencesFailure} from './actions';

async function getSciencesAPI() {
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

function* getSciences() {
  try {
    const response = yield call(getSciencesAPI);
    const {data} = response;
    yield put(getSciencesSuccess(data));
  } catch (e) {
    yield put(getSciencesFailure());

    showMessage({
      message: 'Unable to load data, something went wrong.',
      type: 'danger',
    });
  }
}

export default all([takeLatest(GET_SCIENCE, getSciences)]);
