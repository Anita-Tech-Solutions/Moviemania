import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import {connect} from 'react-redux';
import {Card2} from '../../components';

import {fetchLove} from '../../redux/actions/movieAction';

const Love = ({love, fetchLove, navigation}) => {
  const [] = useState(true);

  useEffect(() => {
    fetchLove();
  }, []);

  return (
    <View>
      <FlatList
        data={love}
        renderItem={({item, index}) => {
          return <Card2 item={item} key={index} navigation={navigation} />;
        }}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
};

const mapStateToProps = (state) => ({
  love: state.movie.love,
});

export default connect(mapStateToProps, {fetchLove})(Love);
