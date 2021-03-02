import React, {useEffect} from 'react';
import {Dimensions, Image, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {poster} from '../constants';

import {fetchDetail} from '../redux/actions/movieAction';

const {width} = Dimensions.get('window');

const MovieDetail = ({route, detail, fetchDetail}) => {
  const {id} = route.params;
  useEffect(() => {
    fetchDetail({id});
  }, []);

  const {title, backdrop_path, overview} = detail;

  return (
    <View>
      <Image
        source={{uri: poster + backdrop_path}}
        resizeMode="contain"
        style={{
          width,
          height: 200,
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
        }}
      />
      <Text>Movie introduction</Text>
      <Text>{overview}</Text>
    </View>
  );
};

const mapStateToProps = (state) => ({
  detail: state.movie.detail,
});

export default connect(mapStateToProps, {fetchDetail})(MovieDetail);
