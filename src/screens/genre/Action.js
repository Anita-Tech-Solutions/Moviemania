import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import {connect} from 'react-redux';
import {Card2} from '../../components';

import {fetchAction} from '../../redux/actions/movieAction';

const Action = ({action, fetchAction, navigation}) => {
  const [] = useState(true);

  useEffect(() => {
    fetchAction();
  }, []);

  return (
    <View>
      <FlatList
        data={action}
        renderItem={({item, index}) => {
          return <Card2 item={item} key={index} navigation={navigation} />;
        }}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
};

const mapStateToProps = (state) => ({
  action: state.movie.actiondata,
});

export default connect(mapStateToProps, {fetchAction})(Action);
