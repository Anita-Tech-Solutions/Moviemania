import React, {useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {} from 'react-native-elements';
import FastImage from 'react-native-fast-image';

//redux
import {fetchCastDetail} from '../redux/actions/movieInfoAction';
import {connect} from 'react-redux';
import {poster} from '../constants';

const CastDetail = ({route, fetchCastDetail, detail}) => {
  const {id} = route.params;

  useEffect(() => {
    fetchCastDetail(id);
  }, []);

  if (detail == null) {
    return <ActivityIndicator size="large" color="red" />;
  }

  const {
    profile_path,
    gender,
    name,
    popularity,
    birthday,
    biography,
    place_of_birth,
    known_for_department,
  } = detail;

  return (
    <View>
      <Text>CastDetail-{id}</Text>
      <FastImage
        onProgress={(e) =>
          console.log(e.nativeEvent.loaded / e.nativeEvent.total)
        }
        onLoadStart={() => <ActivityIndicator size="large" color="red" />}
        source={{uri: poster + profile_path}}
        style={{width: 300, height: 200}}
      />
      <Text>{name}</Text>
      <Text>{gender}</Text>
      <Text>{popularity}</Text>
      <Text>{birthday}</Text>
      <Text>{biography}</Text>
      <Text>{place_of_birth}</Text>
      <Text>{known_for_department}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const mapStateToProps = (state) => ({
  detail: state.detail.castdetail,
});

export default connect(mapStateToProps, {fetchCastDetail})(CastDetail);
