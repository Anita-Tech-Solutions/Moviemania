import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import {connect} from 'react-redux';
import {Card2} from '../../components';

import {fetchComedy} from '../../redux/actions/movieAction';

const Comedy = ({comedy, fetchComedy, navigation}) => {
  const [] = useState(true);

  useEffect(() => {
    fetchComedy();
  }, []);

  return (
    <View>
      <FlatList
        data={comedy}
        renderItem={({item, index}) => {
          return <Card2 item={item} key={index} navigation={navigation} />;
        }}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
};

const mapStateToProps = (state) => ({
  comedy: state.movie.comedy,
});

export default connect(mapStateToProps, {fetchComedy})(Comedy);
