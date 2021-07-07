import {all, call, put, takeLatest} from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import {showMessage} from 'react-native-flash-message';

// services
import {navigate} from 'src/navigator/NavigationService';

// config
import {appConfig} from 'src/config/app';

// utils
import XHR from 'src/utils/XHR';

// types
import {POST_STEP_THREE} from './types';

// actions
import {
  postStepThreeSuccess,
  postStepThreeFailure,
  setAuthToken,
} from './actions';

async function postStepThirdDataAPI(data, id) {
  const authToken = await AsyncStorage.getItem('authToken');
  const URL = `${appConfig.backendServerURL}/api/v1/user_profile/${id}/`;

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

function* postStepThirdData({data, user}) {
  try {
    const response = yield call(postStepThirdDataAPI, data, user.id);

    yield put(postStepThreeSuccess(data));
    yield put(setAuthToken(user.authToken));
  } catch (e) {
    console.log(e);
    yield put(postStepThreeFailure());
    showMessage({
      message: 'Unable to load data, something went wrong.',
      type: 'danger',
    });
  }
}

export default all([takeLatest(POST_STEP_THREE, postStepThirdData)]);
