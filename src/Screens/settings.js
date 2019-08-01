import React, { Component } from 'react';
import { Text, View, StyleSheet, AsyncStorage } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Actions } from 'react-native-router-flux';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { p } from '../Config/normalize';

export default class Settings extends Component {

  logout = async () => {
    await AsyncStorage.removeItem('TOKEN')
    this.props.logout()
  }

  render() {
    return (
      <View style={{ backgroundColor: '#fff', flex: 1 }}>

        <View style={style.view}>
          <MaterialCommunityIcons name="arrow-left" color={'#2699FB'} size={p(24)} onPress={() => Actions.pop()} />
          <Text style={style.text}>{'SETTINGS'}</Text>
          <Text>{''}</Text>
        </View>

        <TouchableOpacity style={[style.item, { marginTop: p(25) }]} onPress={() => Actions.email()}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <MaterialCommunityIcons name="email" color={'#2699FB'} size={22} />
            <Text style={[style.title, { marginLeft: p(16) }]}>Email</Text>
          </View>
          <Text style={style.title2}>paul, info</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.item} onPress={() => Actions.password()}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <MaterialCommunityIcons name="lock" color={'#2699FB'} size={22} />
            <Text style={[style.title, { marginLeft: p(16) }]}>Password</Text>
          </View>
          <Text style={[style.title2, { fontSize: p(8), letterSpacing: 2 }]}>●●●●●●●</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.item}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <MaterialCommunityIcons name="autorenew" color={'#2699FB'} size={22} />
            <Text style={[style.title, { marginLeft: 16 }]}>Check Update</Text>
          </View>
          <Text style={style.title2}>v 1.0.2 (14)</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.item}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <MaterialCommunityIcons name="help-circle" color={'#2699FB'} size={22} />
            <Text style={[style.title, { marginLeft: p(16) }]}>Help</Text>
          </View>
          <Text style={style.title2}>Call us +61 3 9759 6266</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.logout} style={style.item}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <MaterialCommunityIcons name="logout" color={'#2699FB'} size={22} />
            <Text style={[style.title, { marginLeft: p(16) }]}>Log Out</Text>
          </View>
          <Text style={style.title2}></Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const style = StyleSheet.create({
  view: {
    flexDirection: 'row',
    paddingHorizontal: p(12),
    paddingTop: p(20),
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  text: {
    color: '#2699FB',
    fontSize: p(16),
    fontWeight: '600',
    marginLeft: -p(24)
  },
  title: {
    color: '#2699FB',
    fontSize: p(16),
    fontWeight: '600',
  },
  title2: {
    color: '#7FC4FD',
    fontSize: p(16),
    fontWeight: '400',
  },
  item: {
    height: p(60),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: p(12),
    marginTop: p(10),
    paddingHorizontal: p(18),
    backgroundColor: '#f1f9ff'
  }
})