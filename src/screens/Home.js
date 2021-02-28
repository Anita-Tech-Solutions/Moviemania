import React, {useEffect} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {Card} from 'react-native-elements';

//redux
import {connect} from 'react-redux';
import {poster} from '../constants';
import {fetchMovie} from '../redux/actions/movieAction';

const Home = ({data, loading, fetchMovie}) => {
  useEffect(() => {
    fetchMovie();
  }, [data, fetchMovie]);

  console.log(data);
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <FlatList
        data={data}
        renderItem={({item, index}) => {
          return (
            <Card>
              <Card.Title>{item.title}</Card.Title>
              <Card.Image source={{uri: poster + item.poster_path}} />
            </Card>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const mapStateToProps = (state) => ({
  loading: state.movie.loading,
  data: state.movie.data,
});

export default connect(mapStateToProps, {fetchMovie})(Home);
