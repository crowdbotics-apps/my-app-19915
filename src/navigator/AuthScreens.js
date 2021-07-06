import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// screens
import {
  Login,
  SignUp,
  ResetPassword,
  StepFirstScreen,
  StepSecondScreen,
  StepThirdScreen,
} from 'src/screens';

const authStack = createStackNavigator();

const AuthStackScreen = () => (
  <authStack.Navigator
    screenOptions={{headerShown: false}}
    initialRouteName="Login">
    <authStack.Screen name="Login" component={Login} />
    <authStack.Screen name="SignUp" component={SignUp} />
    <authStack.Screen name="ResetPassword" component={ResetPassword} />
    <authStack.Screen name="StepFirstScreen" component={StepFirstScreen} />
    <authStack.Screen name="StepSecondScreen" component={StepSecondScreen} />
    <authStack.Screen name="StepThirdScreen" component={StepThirdScreen} />
  </authStack.Navigator>
);

export default AuthStackScreen;
