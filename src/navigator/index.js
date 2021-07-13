import React from 'react';
import {connect} from 'react-redux';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {navigationRef} from './NavigationService';

import AuthStackScreen from './AuthScreens';
import MainStackScreen from './MainScreens';
import DrawerSideMenu from '../screens/SideMenu';

const authStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const RootNavigationStack = (props) => {
  return (
    <NavigationContainer ref={navigationRef}>
      {props.isAuth ? (
        <Drawer.Navigator
          drawerStyle={{width: '90%'}}
          drawerContent={(propsInit) => <DrawerSideMenu {...propsInit} />}>
          <Drawer.Screen name="AuthHome" component={MainStackScreen} />
        </Drawer.Navigator>
      ) : (
        <authStack.Navigator screenOptions={{headerShown: false}}>
          <authStack.Screen name="AuthStack" component={AuthStackScreen} />
        </authStack.Navigator>
      )}
    </NavigationContainer>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.app.authToken,
});

export default connect(mapStateToProps, null)(RootNavigationStack);
