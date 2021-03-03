import React from 'react';
import {StyleSheet, View, Text, Image, Dimensions} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {poster} from '../constants';

const {width} = Dimensions.get('window');

const Card2 = ({item, navigation}) => {
  const {
    id,
    title,
    poster_path,
    overview,
    vote_count,
    release_date,
    vote_average,
  } = item;

  const renderTitle = (title) => {
    if (title.length >= 100) {
      return title.substring(0, 100) + '...';
    }
    return title;
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate('Detail', {id, vote_count})}>
      <View style={styles.container}>
        <View>
          <Image
            source={{uri: poster + poster_path}}
            resizeMode="center"
            style={{width: 150, height: 200, borderRadius: 10}}
          />
        </View>
        <View style={{width: width * 0.5, marginLeft: 10}}>
          <Text style={{fontSize: 16, fontWeight: '800'}}>{title}</Text>
          <Text style={{fontSize: 12, textAlign: 'justify'}}>
            {renderTitle(overview)}
          </Text>
          <Text>Attention-{vote_count}</Text>
          <Text>Release-Date-{release_date}</Text>
          <Text style={{color: 'orange'}}>Rating-{vote_average}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    margin: 5,
    width: width * 0.95,
    alignContent: 'center',
  },
});

export default Card2;
