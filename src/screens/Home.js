import React, {useEffect} from 'react';
import {Dimensions, FlatList, ScrollView} from 'react-native';

//redux
import {connect} from 'react-redux';
import {
  fetchTrending,
  fetchUpcoming,
  fetchToprated,
} from '../redux/actions/movieAction';

import {Header, Title} from '../components';
const {width} = Dimensions.get('window');

import {Card} from '../components';
import getColorTheme from '../helpers/Theme';

const Home = ({
  navigation,
  trending,
  upcoming,
  top_rated,
  fetchTrending,
  fetchUpcoming,
  fetchToprated,
}) => {
  const theme = getColorTheme();

  useEffect(() => {
    fetchTrending();
    fetchUpcoming();
    fetchToprated();
  }, []);

  return (
    <ScrollView
      style={{flex: 1}}
      contentContainerStyle={{backgroundColor: theme.colors.background}}>
      <Header navigation={navigation} />
      {/*Trending*/}
      <Title navigation={navigation}>Trending</Title>
      <FlatList
        data={trending}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        scrollEnabled
        renderItem={({item, index}) => {
          return <Card item={item} navigation={navigation} key={index} />;
        }}
      />

      {/*Upcoming*/}
      <Title navigation={navigation}>Upcoming</Title>
      <FlatList
        data={upcoming}
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEnabled
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item, index}) => {
          return <Card item={item} navigation={navigation} key={index} />;
        }}
      />

      {/**Top Rated */}
      <Title navigation={navigation}>Top Rated</Title>
      <FlatList
        data={top_rated}
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEnabled
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item, index}) => {
          return <Card item={item} navigation={navigation} key={index} />;
        }}
      />
    </ScrollView>
  );
};

const mapStateToProps = (state) => ({
  loading: state.movie.loading,
  trending: state.movie.trending,
  upcoming: state.movie.upcoming,
  top_rated: state.movie.top_rated,
});

export default connect(mapStateToProps, {
  fetchTrending,
  fetchUpcoming,
  fetchToprated,
})(Home);
