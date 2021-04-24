import React, {memo, useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, TextInput, View} from 'react-native';
import {Icon} from 'react-native-elements';

import {Card2} from '../components';

//redux
import {searchMovie} from '../redux/actions/movieAction';
import {connect} from 'react-redux';
import {SafeAreaView} from 'react-native-safe-area-context';

const Search = ({searchMovie, search, navigation}) => {
  const [query, setQuery] = useState('');
  const [num, setNum] = useState(0);

  useEffect(() => {
    //searchMovie('');
  }, [searchMovie, search]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.search}>
          <Icon name="search" />
          <TextInput
            placeholder="Type movie name here"
            onSubmitEditing={(event) => searchMovie(event.nativeEvent.text)}
          />
        </View>
        <FlatList
          data={search}
          renderItem={({item, index}) => (
            <Card2 item={item} key={index} navigation={navigation} />
          )}
          keyExtractor={(_, index) => index.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  search: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    margin: 10,
    borderRadius: 10,
    paddingLeft: 20,
  },
});

const mapStateToProps = (state) => ({
  search: state.movie.search,
});

export default connect(mapStateToProps, {searchMovie})(memo(Search));
