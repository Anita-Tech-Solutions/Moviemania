import React from 'react';
import {StyleSheet, View, Text, Image, Dimensions} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {font, poster} from '../constants';

import FastImage from 'react-native-fast-image';
import getColorTheme from '../helpers/Theme';

const {width} = Dimensions.get('window');

const Card2 = ({item, navigation}) => {
  const theme = getColorTheme();

  const {
    id,
    title,
    poster_path,
    overview,
    vote_count,
    release_date,
    vote_average,
  } = item;

  const renderTitle = (title) => {
    if (title.length >= 100) {
      return title.substring(0, 100) + '...';
    }
    return title;
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate('Detail', {id, vote_count})}>
      <View
        style={[styles.container, {backgroundColor: theme.colors.background}]}>
        <View>
          {poster_path === null ? (
            <FastImage
              source={require('../assets/images/alt.png')}
              resizeMode="contain"
              style={{
                width: 150,
                height: 200,
                borderRadius: 10,
                backgroundColor: '#66ccff',
              }}
            />
          ) : (
            <FastImage
              source={{uri: poster + poster_path}}
              resizeMode="cover"
              style={{
                width: 150,
                height: 200,
                borderRadius: 10,
                backgroundColor: '#66ccff',
              }}
            />
          )}
        </View>
        <View style={{width: width * 0.5, marginLeft: 10}}>
          <Text
            style={{fontSize: 16, fontWeight: '800', color: theme.colors.text}}>
            {title}
          </Text>
          <Text
            style={{
              fontSize: 12,
              textAlign: 'justify',
              color: theme.colors.text,
            }}>
            {renderTitle(overview)}
          </Text>
          <Text style={{color: theme.colors.text, fontFamily: font.oregular}}>
            Attention-{vote_count}
          </Text>
          <Text style={{color: theme.colors.text, fontFamily: font.oregular}}>
            Release-Date-{release_date}
          </Text>
          <Text style={{color: 'orange'}}>Rating-{vote_average}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    margin: 5,
    width: width * 0.95,
    alignContent: 'center',
  },
});

export default Card2;
