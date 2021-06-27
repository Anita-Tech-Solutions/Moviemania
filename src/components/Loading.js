import React from 'react';
import {Dimensions, View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

import getColorTheme from '../helpers/Theme';

import LottieView from 'lottie-react-native';

const {width} = Dimensions.get('window');

const Loading = () => {
  const theme = getColorTheme();

  return (
    <LottieView
      source={require('../assets/animation/loading.json')}
      autoPlay
      loop
      style={{backgroundColor: theme.colors.background}}
    />
  );
};

export default Loading;
