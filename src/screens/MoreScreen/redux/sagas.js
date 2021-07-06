import {all, call, put, takeLatest} from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import {showMessage} from 'react-native-flash-message';

// config
import {appConfig} from 'src/config/app';

// utils
import XHR from 'src/utils/XHR';

// types
import {GET_MORE_RESOURCES, GET_SELECTED_RESOURCE} from './types';

// actions
import {
  getMoreResourcesSuccess,
  getMoreResourcesFailure,
  getSelectedResourcesSuccess,
  getSelectedResourcesFailure,
} from './actions';

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

async function getSelectedResourcesAPI(id) {
  const URL = `${appConfig.backendServerURL}/api/v1/smile_resource_item/?resource=${id}`;
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

function* getSelectedResources({item}) {
  try {
    console.log('ID', item.id);
    const response = yield call(getSelectedResourcesAPI, item.id);
    const {data} = response;
    console.log('DATA', data);
    yield put(getSelectedResourcesSuccess(data));
  } catch (e) {
    console.log('Error', e);
    yield put(getSelectedResourcesFailure());

    showMessage({
      message: 'Unable to load data, something went wrong.',
      type: 'danger',
    });
  }
}

export default all([
  takeLatest(GET_MORE_RESOURCES, getResources),
  takeLatest(GET_SELECTED_RESOURCE, getSelectedResources),
]);
