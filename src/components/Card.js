import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import {poster} from '../constants';

const Card = ({item, navigation}) => {
  return (
    <View style={styles.container}>
      <FastImage
        source={{uri: poster + item.poster_path}}
        resizeMode="cover"
        style={styles.image}
      />
      <Text style={styles.text}>{item.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 250,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 15,
  },
  text: {
    textAlign: 'center',
  },
});

export default Card;
