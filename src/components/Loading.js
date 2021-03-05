import React from 'react';
import {Dimensions, View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const {width} = Dimensions.get('window');

const Loading = () => {
  return (
    <SkeletonPlaceholder>
      <View style={{flexDirection: 'row', padding: 10}}>
        <View style={{width: 150, height: 200, borderRadius: 5}} />
        <View style={{justifyContent: 'space-between', marginLeft: 10}}>
          <View style={{width: width - 190, height: 120, borderRadius: 5}} />
          <View
            style={{
              marginTop: 6,
              width: width - 190,
              height: 40,
              borderRadius: 5,
            }}
          />
          <View
            style={{
              marginTop: 6,
              width: width - 190,
              height: 20,
              borderRadius: 5,
            }}
          />
        </View>
      </View>
    </SkeletonPlaceholder>
  );
};

export default Loading;
