import React, {memo, useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import {connect} from 'react-redux';
import {Card2, Loading} from '../../components';

import {fetchComedy} from '../../redux/actions/movieAction';

const Comedy = ({comedy, fetchComedy, loading, navigation}) => {
  const [offset, setOffset] = useState(1);

  useEffect(() => {
    fetchComedy(offset);
  }, []);

  const getData = () => {
    setOffset(offset + 1);
    fetchComedy(offset + 1);
  };

  return (
    <View>
      <FlatList
        data={comedy}
        renderItem={({item, index}) => {
          return <Card2 item={item} key={index} navigation={navigation} />;
        }}
        keyExtractor={(_, index) => index.toString()}
        onEndReached={getData}
        onEndReachedThreshold={0.5}
        ListFooterComponent={comedy && <Loading />}
      />
    </View>
  );
};

const mapStateToProps = (state) => ({
  comedy: state.movie.comedy,
  loading: state.movie.loading,
});

export default connect(mapStateToProps, {fetchComedy})(memo(Comedy));
