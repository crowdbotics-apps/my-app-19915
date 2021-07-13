import React, {useState, useEffect} from 'react';
import * as eva from '@eva-design/eva';
import {
  ApplicationProvider,
  IconRegistry,
} from 'react-native-ui-kitten';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {Provider as ReduxProvider} from 'react-redux';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import {Root} from 'native-base';
import {StatusBar, Platform, AppState} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import SplashScreen from './src/screens/Splash';
import {store} from './src/redux/store';
import NavigatorProvider from './src/navigator';
import {setupHttpConfig} from './src/utils/http';
import {Colors} from 'src/theme';
import RemotePushController from './src/services/PushNotification';

const persistor = persistStore(store);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log('AppState.currentState;', AppState.currentState);
    loadAssets();
    Platform.OS === 'android' && StatusBar.setBackgroundColor(Colors.primary);
    RemotePushController();
  });

  const loadAssets = () => {
    setTimeout(() => {
      setupHttpConfig(setIsLoading);
    }, 500);
  };

  const renderLoading = () => <SplashScreen />;

  const renderApp = () => (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={eva.light}>
          <Root>
            <NavigatorProvider />
            <FlashMessage />
          </Root>
        </ApplicationProvider>
      </PersistGate>
    </ReduxProvider>
  );

  return isLoading ? renderLoading() : renderApp();
};

export default () => <App />;
