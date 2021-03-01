import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// screens
import {
  Login
} from 'src/screens';

const authStack = createStackNavigator();

const AuthStackScreen = () => (
  <authStack.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName="Login"
  >
    <authStack.Screen name="Login" component={Login} />
  </authStack.Navigator>
);

export default AuthStackScreen;
