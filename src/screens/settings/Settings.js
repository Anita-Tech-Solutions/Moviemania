import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {ListItem, Switch, SearchBar, Icon} from 'react-native-elements';

import {useSelector, useDispatch} from 'react-redux';
import getColorTheme from '../../helpers/Theme';
import {changeTheme} from '../../redux/actions/themeAction';

const data = [
  {
    title: 'Account',
    iconName: 'user',
    iconType: 'feather',
  },
  {
    title: 'Notifications',
    iconName: 'bell',
    iconType: 'evilicon',
  },
  {
    title: 'Appearance',
    iconName: 'eye',
    iconType: 'feather',
  },
  {
    title: 'Privacy and Policy',
    iconName: 'lock',
    iconType: 'evilicon',
  },
  {
    title: 'Terms and Conditions',
    iconName: 'document-text-outline',
    iconType: 'ionicon',
  },
  {
    title: 'Help and Support',
    iconName: 'headphones',
    iconType: 'feather',
  },
  {
    title: 'About',
    iconName: 'info',
    iconType: 'feather',
  },
];

const Settings = () => {
  const theme = useSelector((state) => state.theme.theme);

  const dispatch = useDispatch();
  const themeColor = getColorTheme();

  return (
    <ScrollView
      bounces={false}
      style={[
        styles.container,
        {backgroundColor: themeColor.colors.background},
      ]}>
      <Text style={[{color: themeColor.colors.text}, styles.heading]}>
        Settings
      </Text>
      <SearchBar
        round
        showCancel={true}
        placeholder="Search Tv..."
        placeholderTextColor={themeColor.colors.text}
        containerStyle={{
          backgroundColor: themeColor.colors.background,
          borderTopColor: themeColor.colors.background,
          borderBottomColor: themeColor.colors.background,
        }}
        inputContainerStyle={{
          backgroundColor: themeColor.colors.background,
          borderWidth: 1,
          borderBottomWidth: 1,
          borderColor: themeColor.colors.text,
        }}
        inputStyle={{}}
      />
      {data.map(({title, iconName, iconType}, index) => {
        if (title == 'Appearance') {
          return (
            <ListItem
              key={'Apearnce'}
              containerStyle={{
                backgroundColor: themeColor.colors.background,
              }}>
              <Icon name="eye" type="feather" color={themeColor.colors.text} />
              <ListItem.Content>
                <ListItem.Title style={{color: themeColor.colors.text}}>
                  Change Theme
                </ListItem.Title>
              </ListItem.Content>
              <Switch
                value={theme}
                onValueChange={() => dispatch(changeTheme(!theme))}
              />
              <ListItem.Chevron />
            </ListItem>
          );
        }
        return (
          <ListItem
            key={index}
            containerStyle={{backgroundColor: themeColor.colors.background}}>
            <Icon
              name={iconName}
              type={iconType}
              color={themeColor.colors.text}
            />
            <ListItem.Content>
              <ListItem.Title style={{color: themeColor.colors.text}}>
                {title}
              </ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        );
      })}
      <ListItem
        containerStyle={{backgroundColor: themeColor.colors.background}}>
        <Icon name="logout" type="materialicon" color="red" />
        <ListItem.Content>
          <ListItem.Title style={{color: 'red'}}>Logout</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    </ScrollView>
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
