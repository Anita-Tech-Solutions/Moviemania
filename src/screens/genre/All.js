import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {Card2, Loading} from '../../components';

import {fetchDiscover} from '../../redux/actions/movieAction';

const All = ({discover, loading, fetchDiscover, navigation}) => {
  const [offset, setOffset] = useState(1);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchDiscover(offset);
    setData(discover);
  }, []);

  const getData = () => {
    setOffset(offset + 1);
    fetchDiscover(offset + 1);
    setData([...data, ...discover]);
  };

  return (
    <View style={styles.container}>
      {data.length === 0 && <Loading />}
      <FlatList
        data={data}
        renderItem={({item, index}) => {
          return <Card2 item={item} key={index} navigation={navigation} />;
        }}
        keyExtractor={(_, index) => index.toString()}
        onEndReached={getData}
        onEndReachedThreshold={0.5}
        ListFooterComponent={loading && <Loading />}
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

export default connect(mapStateToProps, {fetchDiscover})(All);
