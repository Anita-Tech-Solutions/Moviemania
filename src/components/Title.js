import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Title = ({children, navigation}) => {
  return (
    <View style={styles.container}>
      <Text>{children}</Text>
      <TouchableOpacity onPress={() => navigation.navigate(children)}>
        <Text>See All</Text>
      </TouchableOpacity>
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
