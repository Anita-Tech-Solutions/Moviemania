import React, {useEffect} from 'react';
import {
  Dimensions,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';
import {Button, Icon, Input} from 'react-native-elements';

//redux
import {connect} from 'react-redux';
import {
  fetchTrending,
  fetchUpcoming,
  fetchToprated,
} from '../redux/actions/movieAction';

import {Title} from '../components';
const {width} = Dimensions.get('window');

import {Card} from '../components';

const Home = ({
  navigation,
  trending,
  upcoming,
  top_rated,
  fetchTrending,
  fetchUpcoming,
  fetchToprated,
}) => {
  useEffect(() => {
    fetchTrending();
    fetchUpcoming();
    fetchToprated();
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{margin: 10}}>
          <Text>What movie are you looking</Text>
          <Text style={{fontWeight: 'bold'}}>forward to seeing ?</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <View
            style={{
              borderRadius: 10,
              width: width * 0.7,
              backgroundColor: '#f2f2f2',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Icon name="search" type="evilicon" />
            <TextInput
              placeholder="Search"
              style={{width: '90%'}}
              onFocus={() => navigation.navigate('Search')}
            />
          </View>
          <Button
            title="+33"
            buttonStyle={{backgroundColor: 'red'}}
            titleStyle={{color: 'white'}}
          />
        </View>

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
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

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
