import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

//screens
import Home from '../screens/Home';
import Cast from '../screens/Cast';
import Settings from '../screens/Settings';

const Bottom = createBottomTabNavigator();

import {MyTabBar} from '../components';
import Discover from '../screens/discover/discover';
import MovieDetail from '../screens/MovieDetail';

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={MovieDetail} />
    </Stack.Navigator>
  );
}

function DiscoverStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Discover" component={Discover} />
      <Stack.Screen name="Detail" component={MovieDetail} />
    </Stack.Navigator>
  );
}

export default function MainNavigator() {
  return (
    <Bottom.Navigator
      initialRouteName="Discover"
      tabBar={(props) => <MyTabBar {...props} />}>
      <Bottom.Screen name="Home" component={HomeStack} />
      <Bottom.Screen name="Discover" component={DiscoverStack} />
      <Bottom.Screen name="Cast" component={Cast} />
      <Bottom.Screen name="Settings" component={Settings} />
    </Bottom.Navigator>
  );
}
