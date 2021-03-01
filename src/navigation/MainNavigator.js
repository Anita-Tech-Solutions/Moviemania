import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

//screens
import Home from '../screens/Home';
import Cast from '../screens/Cast';
import Settings from '../screens/Settings';
import Genre from '../screens/Genre';

const Stack = createStackNavigator();
const Bottom = createBottomTabNavigator();
const Top = createMaterialTopTabNavigator();

export default function MainNavigator() {
  return (
    <Bottom.Navigator>
      <Bottom.Screen name="Home" component={Home} />
      <Bottom.Screen name="Genre" component={Genre} />
      <Bottom.Screen name="Cast" component={Cast} />
      <Bottom.Screen name="Settings" component={Settings} />
    </Bottom.Navigator>
  );
}