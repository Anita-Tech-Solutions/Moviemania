import React from 'react';
import {StatusBar, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';

import {store, persistor} from './src/redux';

import AppNavigator from './src/navigation/AppNavigator';
import {PersistGate} from 'redux-persist/integration/react';

import {theme} from './src/constants';
import {ThemeProvider} from 'react-native-elements';
import getColorTheme from './src/helpers/Theme';

const Status = () => {
  const insets = useSafeAreaInsets();
  const theme = getColorTheme();
  return (
    <View
      style={{backgroundColor: theme.colors.background, height: insets.top}}>
      <StatusBar barStyle="default" backgroundColor={theme.colors.background} />
    </View>
  );
};

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Status />
          <ThemeProvider theme={theme}>
            <NavigationContainer>
              <AppNavigator />
            </NavigationContainer>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
