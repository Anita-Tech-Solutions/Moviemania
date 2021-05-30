import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ListItem, Switch} from 'react-native-elements';

import {useSelector, useDispatch} from 'react-redux';
import getColorTheme from '../../helpers/Theme';
import {changeTheme} from '../../redux/actions/themeAction';

const Settings = () => {
  const theme = useSelector((state) => state.theme.theme);

  const dispatch = useDispatch();
  const themeColor = getColorTheme();

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: themeColor.colors.background},
      ]}>
      <Text style={[{color: themeColor.colors.text}, styles.heading]}>
        Settings
      </Text>
      <ListItem
        containerStyle={{
          backgroundColor: themeColor.colors.background,
        }}>
        <ListItem.Title>Change Theme</ListItem.Title>
        <Switch
          value={theme}
          onValueChange={() => dispatch(changeTheme(!theme))}
        />
        <ListItem.Chevron />
      </ListItem>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    fontSize: 25,
    textAlign: 'center',
  },
});

export default Settings;
