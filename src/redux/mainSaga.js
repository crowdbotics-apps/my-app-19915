import {all} from 'redux-saga/effects';

// sagas
import login from 'src/screens/Login/redux/sagas';
import signUp from 'src/screens/SignUp/redux/sagas';
import dashboard from 'src/screens/Dashboard/redux/sagas';
import quote from 'src/screens/DailyQuote/redux/sagas';
import exercises from 'src/screens/SmileExercises/redux/sagas';
import community from 'src/screens/Community/redux/sagas';
import sciences from 'src/screens/SmileExercisesMaxHeight/redux/sagas';
export function* mainSaga() {
  yield all([login, signUp, dashboard, quote, exercises, community, sciences]);
}
