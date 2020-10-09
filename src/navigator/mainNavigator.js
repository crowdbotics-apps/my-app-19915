import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen18134579Navigator from '../features/BlankScreen18134579/navigator';
import BlankScreen17134578Navigator from '../features/BlankScreen17134578/navigator';
import BlankScreen16133419Navigator from '../features/BlankScreen16133419/navigator';
import BlankScreen15133414Navigator from '../features/BlankScreen15133414/navigator';
import BlankScreen14122194Navigator from '../features/BlankScreen14122194/navigator';
import BlankScreen13122193Navigator from '../features/BlankScreen13122193/navigator';
import BlankScreen12122192Navigator from '../features/BlankScreen12122192/navigator';
import BlankScreen11120014Navigator from '../features/BlankScreen11120014/navigator';
import BlankScreen10120013Navigator from '../features/BlankScreen10120013/navigator';
import Camera10120012Navigator from '../features/Camera10120012/navigator';
import BlankScreen8120011Navigator from '../features/BlankScreen8120011/navigator';
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
BlankScreen18134579: { screen: BlankScreen18134579Navigator },
BlankScreen17134578: { screen: BlankScreen17134578Navigator },
BlankScreen16133419: { screen: BlankScreen16133419Navigator },
BlankScreen15133414: { screen: BlankScreen15133414Navigator },
BlankScreen14122194: { screen: BlankScreen14122194Navigator },
BlankScreen13122193: { screen: BlankScreen13122193Navigator },
BlankScreen12122192: { screen: BlankScreen12122192Navigator },
BlankScreen11120014: { screen: BlankScreen11120014Navigator },
BlankScreen10120013: { screen: BlankScreen10120013Navigator },
Camera10120012: { screen: Camera10120012Navigator },
BlankScreen8120011: { screen: BlankScreen8120011Navigator },
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
