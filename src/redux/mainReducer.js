import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

// reducers
import login from '../screens/Login/redux/reducer';

const appPersistConfig = {
  key: 'login',
  storage: AsyncStorage,
  timeout: null,
};

export default {
  login: persistReducer(appPersistConfig, login),
};
