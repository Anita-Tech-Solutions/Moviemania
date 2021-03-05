import React, {memo, useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import {connect} from 'react-redux';
import {Card2, Loading} from '../../components';

import {fetchLove} from '../../redux/actions/movieAction';

const Love = ({love, fetchLove, navigation}) => {
  const [offset, setOffset] = useState(1);

  useEffect(() => {
    fetchLove();
  }, []);

  const getData = () => {
    setOffset(offset + 1);
    fetchLove(offset + 1);
  };

  return (
    <View>
      <FlatList
        data={love}
        renderItem={({item, index}) => {
          return <Card2 item={item} key={index} navigation={navigation} />;
        }}
        keyExtractor={(_, index) => index.toString()}
        onEndReached={getData}
        onEndReachedThreshold={0.5}
        ListFooterComponent={love && <Loading />}
      />
    </View>
  );
};

const mapStateToProps = (state) => ({
  love: state.movie.love,
});

export default connect(mapStateToProps, {fetchLove})(memo(Love));
