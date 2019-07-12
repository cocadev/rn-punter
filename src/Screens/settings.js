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
        <View style={[style.item, { marginTop:25}]}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <MaterialCommunityIcons name="email" color={'#2699FB'} size={22} />
            <Text style={[style.title, { marginLeft: 16}]}>Email</Text>
          </View>
          <Text style={style.title2}>paul, info</Text>
        </View>
        <View style={style.item}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <MaterialCommunityIcons name="lock" color={'#2699FB'} size={22} />
            <Text style={[style.title, { marginLeft: 16}]}>Password</Text>
          </View>
          <Text style={[style.title2, { fontSize: 8, letterSpacing: 2}]}>●●●●●●●</Text>
        </View>
        <View style={style.item}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <MaterialCommunityIcons name="autorenew" color={'#2699FB'} size={22} />
            <Text style={[style.title, { marginLeft: 16}]}>Check Update</Text>
          </View>
          <Text style={style.title2}>v 1.0.2 (14)</Text>
        </View>
        <View style={style.item}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <MaterialCommunityIcons name="help-circle" color={'#2699FB'} size={22} />
            <Text style={[style.title, { marginLeft: 16}]}>Help</Text>
          </View>
          <Text style={style.title2}>Call us +61 3 9759 6266</Text>
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
  title: {
    color: '#2699FB',
    fontSize: 16,
    fontWeight: '600',
  },
  title2: {
    color: '#7FC4FD',
    fontSize: 16,
    fontWeight: '400',
  },
  item: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal:12,
    marginTop:10,
    paddingHorizontal:18,
    backgroundColor: '#f1f9ff'
  }
})