import React, {useEffect} from 'react';
import {StatusBar, View} from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import {Provider, useSelector} from 'react-redux';

import {store, persistor} from './src/redux';

import AppNavigator from './src/navigation/AppNavigator';
import {PersistGate} from 'redux-persist/integration/react';

import {theme} from './src/constants';
import {ThemeProvider} from 'react-native-elements';
import getColorTheme from './src/helpers/Theme';

import messaging from '@react-native-firebase/messaging';

// import OneSignal from 'react-native-onesignal';

// //OneSignal Init Code
// OneSignal.setLogLevel(6, 0);
// OneSignal.setAppId('50172376-0990-4d88-9acf-260b72d5b8d6');
// //END OneSignal Init Code

// //Prompt for push on iOS
// OneSignal.promptForPushNotificationsWithUserResponse((response) => {
//   console.log('Prompt response:', response);
// });

// //Method for handling notifications received while app in foreground
// OneSignal.setNotificationWillShowInForegroundHandler(
//   (notificationReceivedEvent) => {
//     console.log(
//       'OneSignal: notification will show in foreground:',
//       notificationReceivedEvent,
//     );
//     let notification = notificationReceivedEvent.getNotification();
//     console.log('notification: ', notification);
//     const data = notification.additionalData;
//     console.log('additionalData: ', data);
//     // Complete with null means don't show a notification.
//     notificationReceivedEvent.complete(notification);
//   },
// );

// //Method for handling notifications opened
// OneSignal.setNotificationOpenedHandler((notification) => {
//   console.log('OneSignal: notification opened:', notification);
// });

const Status = () => {
  const insets = useSafeAreaInsets();
  const state = useSelector((state) => state.theme.theme);
  const theme = getColorTheme();

  return (
    <View
      style={{backgroundColor: theme.colors.background, height: insets.top}}>
      <StatusBar
        barStyle={state ? 'light-content' : 'dark-content'}
        backgroundColor={theme.colors.background}
      />
    </View>
  );
};

const App = () => {
  useEffect(() => {
    // Get the device token
    messaging()
      .getToken()
      .then((token) => {
        // console.log(token);
      });
  }, []);

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Status />
          <ThemeProvider theme={theme}>
            <AppNavigator />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
