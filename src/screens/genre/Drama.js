import React, {memo, useEffect, useState} from 'react';
import {FlatList, View,ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import {Card2, Loading} from '../../components';
import getColorTheme from '../../helpers/Theme';

import {fetchDrama} from '../../redux/actions/movieAction';

const Drama = ({drama, fetchDrama, navigation}) => {
  const theme = getColorTheme();
  const [offset, setOffset] = useState(1);

  useEffect(() => {
    fetchDrama();
  }, []);

  const getData = () => {
    setOffset(offset + 1);
    fetchDrama(offset + 1);
  };

  return (
    <View style={{backgroundColor: theme.colors.background}}>
      <FlatList
        data={drama}
        renderItem={({item, index}) => {
          return <Card2 item={item} key={index} navigation={navigation} />;
        }}
        keyExtractor={(_, index) => index.toString()}
        onEndReached={getData}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          drama && <ActivityIndicator size="large" color={theme.colors.text} />
        }
      />
    </View>
  );
};

const mapStateToProps = (state) => ({
  drama: state.movie.drama,
});

export default connect(mapStateToProps, {fetchDrama})(memo(Drama));
