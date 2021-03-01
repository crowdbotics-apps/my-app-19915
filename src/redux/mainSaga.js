import { all } from 'redux-saga/effects';

// sagas
import login from '../screens/Login/redux/sagas';

export function* mainSaga() {
  yield all([
    login
  ]);
}
