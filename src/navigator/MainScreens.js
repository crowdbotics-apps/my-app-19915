import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// screens
import {
    Dashboard,
    GoalScreen,
    StatScreen,
    GameScreen,
    SplashScreen,
    DailyQuote,
    StepFirstScreen,
    StepSecondScreen,
    StepThirdScreen,
    CameraScreen,
    SideMenu,
    Tutorial,
    MoreScreen,
    SmileExercises,
    SocialSection,
    SmileExercisesMaxHeight,
    Community
} from 'src/screens';

// theme
import { Images, Colors } from 'src/theme';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                activeTintColor: '#EF9919',
                inactiveTintColor: Colors.black,
                labelStyle: {
                    fontSize: 14,
                    lineHeight: 14,
                    fontWeight: 'bold'
                },
                style: {
                    height: 111,
                    paddingBottom: 15,
                    backgroundColor: Colors.blacksqueeze,
                },
            }}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = !focused ? Images.homelight : Images.homedark;
                    } else if (route.name === 'Goals') {
                        iconName = !focused ? Images.goalslight : Images.goalsdark;
                    } else if (route.name === 'Stats') {
                        iconName = !focused ? Images.statslight : Images.statsdark;
                    } else if (route.name === 'Games') {
                        iconName = !focused ? Images.gameslight : Images.gamesdark;
                    } else if (route.name === 'Exercise') {
                        iconName = !focused ? Images.morelight : Images.moredark;
                    }
                    // You can return any component that you like here!
                    return (
                        <Image source={iconName} style={{ width: 50, height: 50 }} />
                    );
                },
            })}
        >
            <Tab.Screen name="Home" component={Dashboard} />
            <Tab.Screen name="Goals" component={GoalScreen} />
            <Tab.Screen name="Stats" component={StatScreen} />
            <Tab.Screen name="Games" component={GameScreen} />
            <Tab.Screen name="Exercise" component={SmileExercises} />
        </Tab.Navigator>
    );
};

const mainStack = createStackNavigator();

const MainStackScreen = () => (
    <mainStack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="SmileExercisesMaxHeight"
    >
        <mainStack.Screen name="Dashboard" component={BottomNavigator} />
        <mainStack.Screen name="Community" component={Community} />
        <mainStack.Screen name="SocialSection" component={SocialSection} />
        <mainStack.Screen name="SmileExercises" component={SmileExercises} />
        <mainStack.Screen name="SideMenu" component={SideMenu} />
        <mainStack.Screen name="StepThirdScreen" component={StepThirdScreen} />
        <mainStack.Screen name="StepSecondScreen" component={StepSecondScreen} />
        <mainStack.Screen name="StepFirstScreen" component={StepFirstScreen} />
        <mainStack.Screen name="DailyQuote" component={DailyQuote} />
        <mainStack.Screen name="SplashScreen" component={SplashScreen} />
        <mainStack.Screen name="GoalScreen" component={GoalScreen} />
        <mainStack.Screen name="StatScreen" component={StatScreen} />
        <mainStack.Screen name="GameScreen" component={GameScreen} />
        <mainStack.Screen name="CameraScreen" component={CameraScreen} />
        <mainStack.Screen name="MoreScreen" component={MoreScreen} />
        <mainStack.Screen name="Tutorial" component={Tutorial} />
        <mainStack.Screen name="SmileExercisesMaxHeight" component={SmileExercisesMaxHeight} />
    </mainStack.Navigator>
);

export default MainStackScreen;
