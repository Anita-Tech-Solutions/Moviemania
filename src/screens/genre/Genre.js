import React from 'react';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import All from './All';
import Action from './Action';
import Drama from './Drama';
import Comedy from './Comedy';
import Love from './Love';

const Top = createMaterialTopTabNavigator();

const Genre = () => {
  return (
    <Top.Navigator swipeEnabled>
      <Top.Screen name="All" component={All} />
      <Top.Screen name="Action" component={Action} />
      <Top.Screen name="Drama" component={Drama} />
      <Top.Screen name="Comedy" component={Comedy} />
      <Top.Screen name="Love" component={Love} />
    </Top.Navigator>
  );
};

export default Genre;
