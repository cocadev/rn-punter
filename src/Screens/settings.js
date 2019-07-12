import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default class Settings extends Component {
  render() {
    return (
      <View>
        <View style={style.view}>
          <MaterialCommunityIcons name="arrow-left" color={'#2699FB'} size={28} />
          <Text style={style.text}>{'SETTINGS'}</Text>
          <Text>{''}</Text>
        </View>
        <View style={style.item}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <MaterialCommunityIcons name="chevron-down" color={'#2699FB'} size={24} />
            <Text>Email</Text>
          </View>
          <Text>paul, info</Text>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  view: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  text: {
    color: '#2699FB',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: -24
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal:12,
    marginTop:10,
    paddingHorizontal:15,
    backgroundColor: '#f1f9ff'
  }
})