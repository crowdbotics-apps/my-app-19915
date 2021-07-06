import {all} from 'redux-saga/effects';

// sagas
import login from 'src/screens/Login/redux/sagas';
import signUp from 'src/screens/SignUp/redux/sagas';
import user from 'src/screens/SignUp/redux/sagas';
import dashboard from 'src/screens/Dashboard/redux/sagas';
import quote from 'src/screens/DailyQuote/redux/sagas';
import exercises from 'src/screens/SmileExercises/redux/sagas';
import resources from 'src/screens/MoreScreen/redux/sagas';
import selectedResource from 'src/screens/MoreScreen/redux/sagas';
import stepThreeData from 'src/screens/StepThirdScreen/redux/sagas';
import sciences from 'src/screens/SmileExercisesMaxHeight/redux/sagas';
import activitiesExercises from 'src/screens/ActivitiesScreen/redux/sagas';
import profileData from 'src/screens/MyAccount/redux/sagas';
import Goals from 'src/screens/GoalScreen/redux/sagas';
export function* mainSaga() {
  yield all([
    user,
    login,
    signUp,
    quote,
    sciences,
    dashboard,
    resources,
    exercises,
    Goals,
    profileData,
    selectedResource,
    activitiesExercises,
    stepThreeData,
  ]);
}
