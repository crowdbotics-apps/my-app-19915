import {all} from 'redux-saga/effects';

// sagas
import login from 'src/screens/Login/redux/sagas';
import signUp from 'src/screens/SignUp/redux/sagas';
import dashboard from 'src/screens/Dashboard/redux/sagas';

export function* mainSaga() {
  yield all([login, signUp, dashboard]);
}
