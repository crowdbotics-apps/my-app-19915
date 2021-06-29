import {all, call, put, takeLatest} from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import {showMessage} from 'react-native-flash-message';

// config
import {appConfig} from 'src/config/app';

// utils
import XHR from 'src/utils/XHR';

// types
import {POST_STEP_THREE} from './types';

// actions
import {postStepThreeSuccess, postStepThreeFailure} from './actions';

async function postStepThirdDataAPI(id) {
  const URL = `${appConfig.backendServerURL}/api/v1/user_profile/${id}/`;
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

function* postStepThirdData({id}) {
  try {
    const response = yield call(postStepThirdDataAPI,id);
    const { data } = response;
    yield put(postStepThreeSuccess(data));
  } catch (e) {
    yield put(postStepThreeFailure());

    showMessage({
      message: 'Unable to load data, something went wrong.',
      type: 'danger',
    });
  }
}

export default all([takeLatest(POST_STEP_THREE, postStepThirdData)]);
