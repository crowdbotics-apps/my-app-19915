import {all, call, put, takeLatest} from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import {showMessage} from 'react-native-flash-message';

// config
import {appConfig} from 'src/config/app';

// utils
import XHR from 'src/utils/XHR';

// types
import {GET_MORE_RESOURCES} from './types';

// actions
import {getMoreResourcesSuccess, getMoreResourcesFailure} from './actions';

async function getResourcesAPI() {
  const URL = `${appConfig.backendServerURL}/api/v1/smile_resource/`;
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

function* getResources() {
  try {
    const response = yield call(getResourcesAPI);
    const {data} = response;
    yield put(getMoreResourcesSuccess(data));
  } catch (e) {
    yield put(getMoreResourcesFailure());

    showMessage({
      message: 'Unable to load data, something went wrong.',
      type: 'danger',
    });
  }
}

export default all([takeLatest(GET_MORE_RESOURCES, getResources)]);
