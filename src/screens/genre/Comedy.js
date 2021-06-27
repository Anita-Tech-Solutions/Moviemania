import React, {memo, useEffect, useState} from 'react';
import {FlatList, View, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import {Card2} from '../../components';
import getColorTheme from '../../helpers/Theme';

import {fetchComedy} from '../../redux/actions/movieAction';

const Comedy = ({comedy, fetchComedy, loading, navigation}) => {
  const theme = getColorTheme();
  const [offset, setOffset] = useState(1);

  useEffect(() => {
    fetchComedy(offset);
  }, []);

  const getData = () => {
    setOffset(offset + 1);
    fetchComedy(offset + 1);
  };

  return (
    <View style={{backgroundColor: theme.colors.background}}>
      <FlatList
        data={comedy}
        renderItem={({item, index}) => {
          return <Card2 item={item} key={index} navigation={navigation} />;
        }}
        keyExtractor={(_, index) => index.toString()}
        onEndReached={getData}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          comedy && <ActivityIndicator size="large" color={theme.colors.text} />
        }
      />
    </View>
  );
};

const mapStateToProps = (state) => ({
  comedy: state.movie.comedy,
  loading: state.movie.loading,
});

export default connect(mapStateToProps, {fetchComedy})(memo(Comedy));
