import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';

import store from './src/redux';

import AppNavigator from './src/navigation/AppNavigator';

import {theme} from './src/constants';
import {ThemeProvider} from 'react-native-elements';
import {Appearance} from 'react-native';

const colorScheme = Appearance.getColorScheme();

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <NavigationContainer>
            <AppNavigator />
          </NavigationContainer>
        </ThemeProvider>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
