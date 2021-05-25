import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

// reducers
import app from 'src/screens/App/redux/reducer';
import signUp from 'src/screens/SignUp/redux/reducer';
import dashboard from 'src/screens/Dashboard/redux/reducer';
import quote from 'src/screens/DailyQuote/redux/reducer';
import exercises from 'src/screens/SmileExercises/redux/reducer';
import community from 'src/screens/Community/redux/reducer';
import sciences from 'src/screens/SmileExercisesMaxHeight/redux/reducer';


const appPersistConfig = {
  key: 'app',
  storage: AsyncStorage,
  timeout: null,
};

export default {
  app: persistReducer(appPersistConfig, app),
  signUp,
  dashboard,
  quote,
  exercises,
  community,
  sciences
};
