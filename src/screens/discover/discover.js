import React, {useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {Card2} from '../../components';

import {fetchDiscover} from '../../redux/actions/movieAction';

const Discover = ({discover, fetchDiscover, navigation}) => {
  useEffect(() => {
    fetchDiscover();
  }, [navigation]);

  return (
    <View>
      <Text>Discover</Text>
      <FlatList
        data={discover}
        renderItem={({item, index}) => {
          return <Card2 item={item} key={index} navigation={navigation} />;
        }}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
};

const mapStateToProps = (state) => ({
  discover: state.movie.discover,
});

export default connect(mapStateToProps, {fetchDiscover})(Discover);
