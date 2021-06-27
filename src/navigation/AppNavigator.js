import React from 'react';
import {Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

//screens
import Splash from '../screens/Splash';
import Welcome from '../screens/Welcome';
import MainNavigator from './MainNavigator';
import {Loading} from '../components';

const Stack = createStackNavigator();

export default function AppNavigator() {
  const linking = {
    prefixes: ['moviemania://', 'https://moviemania-4e83c.web.app'],
    config: {
      screens: {
        Splash: 'splash',
        Welcome: 'welcome',
        Home: {
          path: 'home',
          screens: {
            Discover: 'discoverscreen',
            Cast: 'castingscreen',
            Settings: 'settingscreen',
          },
        },
      },
    },
  };

  return (
    <NavigationContainer linking={linking} fallback={<Loading />}>
      <Stack.Navigator headerMode="none" initialRouteName="Home">
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Home" component={MainNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
