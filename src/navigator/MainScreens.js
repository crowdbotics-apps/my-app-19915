import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// screens

const mainStack = createStackNavigator();

const MainStackScreen = () => (
    <mainStack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="MainMenu"
    >
    </mainStack.Navigator>
);

export default MainStackScreen;
