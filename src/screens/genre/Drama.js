import React, {memo, useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import {connect} from 'react-redux';
import {Card2, Loading} from '../../components';

import {fetchDrama} from '../../redux/actions/movieAction';

const Drama = ({drama, fetchDrama, navigation}) => {
  const [offset, setOffset] = useState(1);

  useEffect(() => {
    fetchDrama();
  }, []);

  const getData = () => {
    setOffset(offset + 1);
    fetchDrama(offset + 1);
  };

  return (
    <View>
      <FlatList
        data={drama}
        renderItem={({item, index}) => {
          return <Card2 item={item} key={index} navigation={navigation} />;
        }}
        keyExtractor={(_, index) => index.toString()}
        onEndReached={getData}
        onEndReachedThreshold={0.5}
        ListFooterComponent={drama && <Loading />}
      />
    </View>
  );
};

const mapStateToProps = (state) => ({
  drama: state.movie.drama,
});

export default connect(mapStateToProps, {fetchDrama})(memo(Drama));
