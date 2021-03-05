import React, {useEffect} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {Icon} from 'react-native-elements';
import {connect} from 'react-redux';
import {poster} from '../constants';

import FastImage from 'react-native-fast-image';
import {fetchDetail} from '../redux/actions/movieAction';

const {width} = Dimensions.get('window');

const MovieDetail = ({route, detail, fetchDetail}) => {
  const {id, vote_count} = route.params;
  useEffect(() => {
    fetchDetail({id});
  }, []);

  const {title, backdrop_path, overview} = detail;

  return (
    <View>
      <FastImage
        source={{uri: poster + backdrop_path}}
        resizeMode="contain"
        style={{
          width,
          height: 200,
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
        }}
      />
      <View style={styles.section}>
        <Text style={{fontSize: 25}}>{title}</Text>
        <View style={styles.section}>
          <Icon name="fire" type="fontisto" color="orange" />
          <Text>Attention</Text>
          <Text>{vote_count}</Text>
        </View>
      </View>
      <View>
        <Text>Movie introduction</Text>
        <Text>{overview}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
  },
});

const mapStateToProps = (state) => ({
  detail: state.movie.detail,
});

export default connect(mapStateToProps, {fetchDetail})(MovieDetail);
