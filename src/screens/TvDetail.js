import React from 'react';

import {ScrollView, View, Text, StyleSheet, Dimensions} from 'react-native';
import FastImage from 'react-native-fast-image';

import {poster, theme} from '../constants';

import {font} from '../constants';

import getColorTheme from '../helpers/Theme';

const {width, height} = Dimensions.get('screen');

const TvDetail = ({route}) => {
  const {item} = route.params;
  const {
    backdrop_path,
    first_air_date,
    name,
    popularity,
    poster_path,
    overview,
    vote_count,
  } = item;

  const theme = getColorTheme();
  return (
    <ScrollView
      bounces={false}
      style={[styles.container, {backgroundColor: theme.colors.background}]}>
      <FastImage
        source={{uri: poster + poster_path}}
        resizeMode="cover"
        style={{height: 250, borderRadius: 10}}
      />
      <Text>Tv Detail</Text>
      <Text>{name}</Text>
      <Text style={{fontFamily: font.regular, color: theme.colors.text}}>
        {overview}
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default TvDetail;
