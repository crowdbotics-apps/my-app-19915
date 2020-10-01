import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial8120010Navigator from '../features/Tutorial8120010/navigator';
import SignIn11120009Navigator from '../features/SignIn11120009/navigator';
import SignUp12120008Navigator from '../features/SignUp12120008/navigator';
import Settings6120005Navigator from '../features/Settings6120005/navigator';
import BlankScreen1120004Navigator from '../features/BlankScreen1120004/navigator';
import BlankScreen0120003Navigator from '../features/BlankScreen0120003/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial8120010: { screen: Tutorial8120010Navigator },
SignIn11120009: { screen: SignIn11120009Navigator },
SignUp12120008: { screen: SignUp12120008Navigator },
Settings6120005: { screen: Settings6120005Navigator },
BlankScreen1120004: { screen: BlankScreen1120004Navigator },
BlankScreen0120003: { screen: BlankScreen0120003Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
