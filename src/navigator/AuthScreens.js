import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// screens
import {
  Login,
  SignUp,
  ResetPassword,
}
  from 'src/screens'

const authStack = createStackNavigator();

const AuthStackScreen = () => (
  <authStack.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName="Login"
  >
    <authStack.Screen name="Login" component={Login} />
    <authStack.Screen name="SignUp" component={SignUp} />
    <authStack.Screen name="ResetPassword" component={ResetPassword} />
  </authStack.Navigator>
);

export default AuthStackScreen;
