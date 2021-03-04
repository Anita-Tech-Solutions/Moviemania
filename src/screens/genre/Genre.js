import React, {useEffect} from 'react';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import All from './All';
import Action from './Action';
import Drama from './Drama';
import Comedy from './Comedy';
import Love from './Love';
import {connect} from 'react-redux';

import {fetchMovielist} from '../../redux/actions/movieAction';
import {Dimensions, Text, View, StyleSheet, TextInput} from 'react-native';

import {Button, Icon} from 'react-native-elements';

const Top = createMaterialTopTabNavigator();
const {width} = Dimensions.get('window');

const Genre = ({fetchMovielist}) => {
  useEffect(() => {
    fetchMovielist();
  }, []);
  return (
    <>
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
            <TextInput placeholder="Search" />
          </View>
          <Button
            title="+33"
            buttonStyle={{backgroundColor: 'red'}}
            titleStyle={{color: 'white'}}
          />
        </View>
      </View>
      <Top.Navigator
        swipeEnabled
        tabBarOptions={{
          allowFontScaling: true,
          scrollEnabled: true,
          activeTintColor: 'black',
          indicatorStyle: {backgroundColor: 'red'},
        }}>
        <Top.Screen name="All" component={All} />
        <Top.Screen name="Action" component={Action} />
        <Top.Screen name="Drama" component={Drama} />
        <Top.Screen name="Comedy" component={Comedy} />
        <Top.Screen name="Love" component={Love} />
      </Top.Navigator>
    </>
  );
};

const mapStateToProps = (state) => ({
  movielist: state.movie.movielist,
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
});

export default connect(mapStateToProps, {fetchMovielist})(Genre);
