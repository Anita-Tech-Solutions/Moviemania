import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Title = ({children, navigation}) => {
  return (
    <View style={styles.container}>
      <Text>{children}</Text>
      <Text>See All</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    padding: 10,
  },
});

export default Title;
