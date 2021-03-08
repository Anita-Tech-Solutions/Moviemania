import React, {useEffect} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
} from 'react-native';
import {Avatar, Icon} from 'react-native-elements';
import {connect} from 'react-redux';
import {poster} from '../constants';
import {Card, Loading} from '../components';
import FastImage from 'react-native-fast-image';
import {
  fetchCast,
  fetchDetail,
  fetchImages,
  fetchRecommend,
} from '../redux/actions/movieInfoAction';

const {width} = Dimensions.get('window');

const MovieDetail = ({
  navigation,
  route,
  detail,
  cast,
  images,
  recommend,
  fetchDetail,
  fetchCast,
  fetchRecommend,
}) => {
  const {id, vote_count} = route.params;
  useEffect(() => {
    fetchDetail(id);
    fetchCast(id);
    fetchImages(id);
    fetchRecommend(id);
  }, []);

  const {title, backdrop_path, overview, genres} = detail;

  if (detail.length === 0) {
    return <Loading />;
  }

  return (
    <ScrollView>
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
        <Text style={{fontSize: 20}}>{title}</Text>
        <View style={styles.section}>
          <Icon name="fire" type="fontisto" color="orange" />
          <Text>Attention</Text>
          <Text>{vote_count}</Text>
        </View>
      </View>
      <ScrollView horizontal>
        {genres.map(({name}, index) => (
          <View
            key={index}
            style={{
              margin: 5,
              backgroundColor: 'orange',
              padding: 5,
              borderRadius: 15,
            }}>
            <Text style={{fontSize: 20, fontWeight: '800', color: 'white'}}>
              {name}
            </Text>
          </View>
        ))}
      </ScrollView>
      <FlatList
        horizontal
        data={images}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item, index}) => {
          return (
            <>
              <Text>{item.backdrops.length}</Text>
              <FastImage
                source={{uri: poster + item.file_path}}
                style={{width: 100, height: 200}}
              />
            </>
          );
        }}
      />
      <FlatList
        data={cast}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item, index}) => {
          if (!item.profile_path) {
            return;
          }
          return (
            // <FastImage
            //   source={{uri: poster + item.profile_path}}
            //   style={{width: 100, height: 150}}
            //   resizeMode="contain"
            // />
            <Avatar
              size={100}
              source={{uri: poster + item.profile_path}}
              containerStyle={{margin: 10}}
              ImageComponent={FastImage}
              imageProps={{resizeMode: 'center'}}
            />
          );
        }}
      />

      <View>
        <Text style={{fontSize: 20, fontWeight: '800'}}>
          Movie introduction
        </Text>
        <Text>{overview}</Text>
      </View>
      <View>
        <Text style={{fontSize: 20, fontWeight: '800'}}>Recommendation</Text>
        <FlatList
          horizontal
          keyExtractor={(_, index) => index.toString()}
          data={recommend}
          renderItem={({item, index}) => (
            <Card item={item} key={index} navigation={navigation} />
          )}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
  },
  backgroundVideo: {
    position: 'absolute',

    top: 100,
    left: 100,
    right: 0,
    bottom: 0,
  },
});

const mapStateToProps = (state) => ({
  detail: state.detail.detail,
  cast: state.detail.cast,
  images: state.detail.images,
  recommend: state.detail.recommend,
});

export default connect(mapStateToProps, {
  fetchDetail,
  fetchCast,
  fetchImages,
  fetchRecommend,
})(MovieDetail);
