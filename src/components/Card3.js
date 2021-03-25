import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Avatar} from 'react-native-elements';

import {poster, theme} from '../constants';

const Card3 = ({item}) => {
  const {author, author_details, content, created_at} = item;

  const renderContent = (title) => {
    if (title.length > 150) {
      return title.substring(0, 150) + '...';
    }
    return title;
  };

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <Avatar
          source={{uri: poster + author_details.avatar_path}}
          renderPlaceholderContent={() => (
            <Image
              source={require('../assets/images/alt.png')}
              resizeMode="center"
              style={{
                backgroundColor: theme.colors.secondary,
                width: 30,
                height: 30,
              }}
            />
          )}
        />
        <Text>{author}</Text>
      </View>
      <View>
        <Text>{renderContent(content)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default Card3;

//some changes