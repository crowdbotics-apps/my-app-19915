import {all, call, put, takeLatest} from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import {showMessage} from 'react-native-flash-message';

// config
import {appConfig} from 'src/config/app';

// utils
import XHR from 'src/utils/XHR';

// types
import {GET_COMMUNITY} from './types';

// actions
import {getCommunitySuccess, getCommunityFailure} from './actions';

async function getCommunityAPI() {
  const URL = `${appConfig.backendServerURL}/api/v1/smile_community/`;
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

function* getCommunity() {
  try {
    const response = yield call(getCommunityAPI);
    const { data } = response;
    yield put(getCommunitySuccess(data));
  } catch (e) {
    yield put(getCommunityFailure());

    showMessage({
      message: 'Unable to load data, something went wrong.',
      type: 'danger',
    });
  }
}

export default all([takeLatest(GET_COMMUNITY, getCommunity)]);
