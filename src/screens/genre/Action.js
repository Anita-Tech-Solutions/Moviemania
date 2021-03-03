import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {Loading, Card2} from '../../components';
import {data} from '../../constants';

import {fetchAction} from '../../redux/actions/movieAction';

const Action = ({action, fetchAction, navigation}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (data.length != 0) {
      return setLoading(false);
    }
    fetchAction();
  }, []);

  return (
    <View>
      <Text>Action s</Text>

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
