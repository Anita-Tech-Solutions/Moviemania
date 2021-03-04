import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import {connect} from 'react-redux';
import {Card2} from '../../components';

import {fetchDrama} from '../../redux/actions/movieAction';

const Drama = ({drama, fetchDrama, navigation}) => {
  const [] = useState(true);

  useEffect(() => {
    fetchDrama();
  }, []);

  return (
    <View>
      <FlatList
        data={drama}
        renderItem={({item, index}) => {
          return <Card2 item={item} key={index} navigation={navigation} />;
        }}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
};

const mapStateToProps = (state) => ({
  drama: state.movie.drama,
});

export default connect(mapStateToProps, {fetchDrama})(Drama);
