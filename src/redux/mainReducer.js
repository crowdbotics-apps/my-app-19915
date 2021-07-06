import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

// reducers
import app from 'src/screens/App/redux/reducer';
import signUp from 'src/screens/SignUp/redux/reducer';
import dashboard from 'src/screens/Dashboard/redux/reducer';
import quote from 'src/screens/DailyQuote/redux/reducer';
import exercises from 'src/screens/SmileExercises/redux/reducer';
import resources from 'src/screens/MoreScreen/redux/reducer';
import selectedResource from 'src/screens/MoreScreen/redux/reducer';
import activitiesExercises from 'src/screens/ActivitiesScreen/redux/reducer';
import sciences from 'src/screens/SmileExercisesMaxHeight/redux/reducer';
import stepOneData from 'src/screens/StepFirstScreen/redux/reducer';
import stepTwoData from 'src/screens/StepSecondScreen/redux/reducer';
import stepThreeData from 'src/screens/StepThirdScreen/redux/reducer';
import profileData from 'src/screens/MyAccount/redux/reducer';
import user from 'src/screens/SignUp/redux/reducer';
import Goals from 'src/screens/GoalScreen/redux/reducer';

const appPersistConfig = {
  key: 'app',
  storage: AsyncStorage,
  timeout: null,
};

const profilePersistConfig = {
  key: 'profileData',
  storage: AsyncStorage,
  timeout: null,
};

export default {
  app: persistReducer(appPersistConfig, app),
  profileData: persistReducer(profilePersistConfig, profileData),
  user,
  signUp,
  dashboard,
  quote,
  resources,
  exercises,
  sciences,
  selectedResource,
  Goals,
  stepOneData,
  stepTwoData,
  stepThreeData,
  activitiesExercises,
};
