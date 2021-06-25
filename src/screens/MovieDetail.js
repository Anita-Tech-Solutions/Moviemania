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
import {font, poster} from '../constants';
import {Card, Card3, Loading} from '../components';
import FastImage from 'react-native-fast-image';
import {WebView} from 'react-native-webview';
import {
  fetchCast,
  fetchDetail,
  fetchImages,
  fetchRecommend,
  fetchComments,
  fetchVideo,
} from '../redux/actions/movieInfoAction';
import getColorTheme from '../helpers/Theme';

const {width} = Dimensions.get('window');

const MovieDetail = ({
  navigation,
  route,
  detail,
  cast,
  images,
  recommend,
  comments,
  video,
  fetchDetail,
  fetchCast,
  fetchRecommend,
  fetchComments,
  fetchVideo,
}) => {
  const theme = getColorTheme();

  const {id, vote_count} = route.params;
  useEffect(() => {
    fetchDetail(id);
    fetchCast(id);
    fetchImages(id);
    fetchRecommend(id);
    fetchComments(id);
    fetchVideo(id);
  }, []);

  const {title, backdrop_path, overview, genres} = detail;

  if (detail.length === 0) {
    return <Loading />;
  }

  return (
    <ScrollView
      contentContainerStyle={{backgroundColor: theme.colors.background}}>
      <FastImage
        source={{uri: poster + backdrop_path}}
        onProgress={(e) =>
          console.log(e.nativeEvent.loaded / e.nativeEvent.total)
        }
        resizeMode="cover"
        style={{
          width,
          height: 250,
          borderRadius: 5,
          backgroundColor: 'red',
        }}
      />
      <View style={styles.section}>
        <Text
          style={{
            fontSize: 20,
            color: theme.colors.text,
            fontFamily: font.obold,
          }}>
          {title}
        </Text>
        <View style={styles.section}>
          <Icon name="fire" type="fontisto" color="orange" />
          <Text style={{color: theme.colors.text, fontFamily: font.obold}}>
            Attention
          </Text>
          <Text style={{color: theme.colors.text, fontFamily: font.oregular}}>
            {vote_count}
          </Text>
        </View>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {genres.map(({name}, index) => (
          <View
            key={index}
            style={{
              margin: 5,
              backgroundColor: 'orange',
              padding: 10,
              borderRadius: 15,
            }}>
            <Text
              style={{
                fontSize: 18,
                color: theme.colors.text,
                fontFamily: font.obold,
              }}>
              {name}
            </Text>
          </View>
        ))}
      </ScrollView>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={images}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item, index}) => {
          return (
            <>
              <Text
                style={{color: theme.colors.text, fontFamily: font.regular}}>
                {item.backdrops.length}
              </Text>
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
            <Avatar
              size={100}
              source={{uri: poster + item.profile_path}}
              containerStyle={{margin: 5}}
              ImageComponent={FastImage}
              avatarStyle={{
                width: '100%',
                borderRadius: 10,
              }}
              imageProps={{resizeMode: 'cover'}}
              onPress={() => navigation.navigate('Castdetail', {id: item.id})}
            />
          );
        }}
      />

      <View style={{padding: 10}}>
        <Text
          style={{
            fontSize: 20,
            fontFamily: font.bold,
            color: theme.colors.text,
          }}>
          Movie introduction
        </Text>
        <Text style={{color: theme.colors.text}}>{overview}</Text>
      </View>
      <View style={{padding: 10}}>
        <Text
          style={{
            fontSize: 20,
            color: theme.colors.text,
            fontFamily: font.bold,
          }}>
          Recommendation
        </Text>
        <FlatList
          horizontal
          keyExtractor={(_, index) => index.toString()}
          data={recommend}
          renderItem={({item, index}) => (
            <Card item={item} key={index} navigation={navigation} />
          )}
        />
      </View>
      <View style={{padding: 10}}>
        <Text
          style={{
            color: theme.colors.text,
            fontSize: 20,
            fontFamily: font.bold,
          }}>
          Trailers
        </Text>
        <FlatList
          horizontal
          pagingEnabled
          data={video}
          contentContainerStyle={{height: 200}}
          ListEmptyComponent={
            <Text style={{fontSize: 25, color: 'red'}}>Empty</Text>
          }
          renderItem={({item, index}) => {
            return (
              <View style={{flex: 1, width}}>
                <WebView
                  javaScriptEnabled={true}
                  domStorageEnabled={true}
                  source={{
                    uri: 'https://www.youtube.com/embed/' + item.key,
                  }}
                />
              </View>
            );
          }}
        />
      </View>
      <View style={{padding: 10}}>
        <Text
          style={{
            color: theme.colors.text,
            fontFamily: font.bold,
            fontSize: 20,
          }}>
          Comments
        </Text>
        <FlatList
          data={comments}
          renderItem={({item, index}) => {
            return <Card3 item={item} key={index} />;
          }}
          keyExtractor={(_, index) => index.toString()}
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
  comments: state.detail.comments,
  video: state.detail.video,
});

export default connect(mapStateToProps, {
  fetchDetail,
  fetchCast,
  fetchImages,
  fetchRecommend,
  fetchComments,
  fetchVideo,
})(MovieDetail);
