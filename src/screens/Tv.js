import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {Card, Title} from '../components';

//redux
import {fetchTvPopular, fetchTvToprated} from '../redux/actions/tvAction';
import {connect} from 'react-redux';
import FastImage from 'react-native-fast-image';
import {poster} from '../constants';
import {font} from '../constants';

import getColorTheme from '../helpers/Theme';

const Tv = ({
  navigation,
  fetchTvPopular,
  fetchTvToprated,
  popular,
  toprated,
}) => {
  const theme = getColorTheme();

  useEffect(() => {
    fetchTvPopular();
    fetchTvToprated();
  }, []);

  return (
    <ScrollView
      style={[styles.container, {backgroundColor: theme.colors.background}]}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 25,
          fontFamily: font.bold,
          color: theme.colors.text,
        }}>
        Tv
      </Text>
      <Title navigation={navigation}>Popular</Title>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={popular}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('Tvdetail', {item})}>
              <FastImage
                source={{uri: poster + item.poster_path}}
                resizeMode="contain"
                style={{width: 180, height: 250, borderRadius: 15}}
              />
            </TouchableOpacity>
          );
        }}
        keyExtractor={(_, index) => index.toString()}
      />
      <Title navigation={navigation}>Top Rated</Title>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={toprated}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('Tvdetail', {item})}>
              <FastImage
                source={{uri: poster + item.poster_path}}
                resizeMode="contain"
                style={{width: 180, height: 250, borderRadius: 15}}
              />
            </TouchableOpacity>
          );
        }}
        keyExtractor={(_, index) => index.toString()}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const mapStateToProps = (state) => ({
  popular: state.tv.popular,
  toprated: state.tv.toprated,
});

export default connect(mapStateToProps, {fetchTvPopular, fetchTvToprated})(Tv);
