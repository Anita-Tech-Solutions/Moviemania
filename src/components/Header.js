import React from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import {Icon} from 'react-native-elements';

const Header = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{margin: 10}}>
        <Text>What movie are you looking</Text>
        <Text style={{fontWeight: 'bold'}}>forward to seeing ?</Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <View
          style={{
            borderRadius: 10,
            width: width * 0.7,
            backgroundColor: '#f2f2f2',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Icon name="search" type="evilicon" />
          <TextInput
            placeholder="Search"
            style={{width: '90%'}}
            onFocus={() => navigation.navigate('Search')}
          />
        </View>
        <Button
          title="+33"
          buttonStyle={{backgroundColor: 'red'}}
          titleStyle={{color: 'white'}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default Header;
