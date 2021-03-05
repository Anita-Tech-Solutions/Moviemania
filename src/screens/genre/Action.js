import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import {connect} from 'react-redux';
import {Card2, Loading} from '../../components';

import {fetchAction} from '../../redux/actions/movieAction';

const Action = ({action, fetchAction, navigation}) => {
  const [offset, setOffset] = useState(1);

  useEffect(() => {
    fetchAction(offset);
  }, []);

  const getData = () => {
    setOffset(offset + 1);
    fetchAction(offset + 1);
  };

  return (
    <View>
      <FlatList
        data={action}
        renderItem={({item, index}) => {
          return <Card2 item={item} key={index} navigation={navigation} />;
        }}
        keyExtractor={(_, index) => index.toString()}
        onEndReached={getData}
        onEndReachedThreshold={0.5}
        ListFooterComponent={action && <Loading />}
      />
    </View>
  );
};

const mapStateToProps = (state) => ({
  action: state.movie.actiondata,
});

export default connect(mapStateToProps, {fetchAction})(Action);
