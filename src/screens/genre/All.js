import React, {memo, useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {Card2, Loading} from '../../components';

import {fetchDiscover} from '../../redux/actions/movieAction';

const All = ({discover, fetchDiscover, navigation}) => {
  const [offset, setOffset] = useState(1);

  useEffect(() => {
    fetchDiscover(offset);
  }, []);

  const getData = () => {
    setOffset(offset + 1);
    fetchDiscover(offset + 1);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={discover}
        renderItem={({item, index}) => {
          return <Card2 item={item} key={index} navigation={navigation} />;
        }}
        keyExtractor={(_, index) => index.toString()}
        onEndReached={getData}
        onEndReachedThreshold={0.5}
        ListFooterComponent={discover && <Loading />}
      />
    </View>
  );
};

const mapStateToProps = (state) => ({
  discover: state.movie.discover,
  loading: state.movie.loading,
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
});

export default connect(mapStateToProps, {fetchDiscover})(memo(All));
