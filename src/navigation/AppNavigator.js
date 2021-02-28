import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

//screens
import Splash from '../screens/Splash';
import Welcome from '../screens/Welcome';
import MainNavigator from './MainNavigator';

export default function AppNavigator() {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Home">
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Home" component={MainNavigator} />
    </Stack.Navigator>
  );
}
