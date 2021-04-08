import { all } from 'redux-saga/effects';

// sagas
import login from 'src/screens/Login/redux/sagas';

export function* mainSaga() {
  yield all([
    login
  ]);
}
