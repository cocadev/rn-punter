import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Header from '../Components/Header';
import Dropdown from '../Components/Dropdown';
import ToggleSwitch from 'toggle-switch-react-native';
import styles from '../Config/styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ModalDropdown from 'react-native-modal-dropdown';

const DEMO_OPTIONS_1 = ['option 1', 'option 2', 'option 3', 'option 4', 'option 5', 'option 6', 'option 7', 'option 8', 'option 9'];

export default class RaceTime extends Component {

  state = {
    meeting: 'RANDWICK',
    track: 'GOOD',
    rail: 'TRUE',
    race: '3',
    isOn: true
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          title={'Race Time'}
          rightElement={(
            <MaterialCommunityIcons
              name="arrow-right"
              color={'#fff'}
              size={28}
            />)}
        />

        <ModalDropdown style={styles.dropdown_1}
          options={DEMO_OPTIONS_1}
        />

        <View style={[styles.view, { marginHorizontal: 12 }]}>

          <View style={style.filling}>
            <Text style={{ color: '#2699FB', fontWeight: '600' }}>Auto-filling</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ color: '#2699FB' }}>Every</Text>
              <View style={style.drop}>
                <Text style={{ color: '#2699FB' }}>30min</Text>
                <MaterialCommunityIcons
                  name="chevron-down"
                  color={'#2699FB'}
                  size={24}
                />
              </View>
            </View>
            <ToggleSwitch
              isOn={this.state.isOn}
              onColor='#2699FB'
              offColor='grey'
              size='small'
              onToggle={(isOn) => this.setState({ isOn: !this.state.isOn })}
            />
          </View>

          <View style={{ flexDirection: 'row' }}>
            <Dropdown time={'10:00'} title={'R1'} />
            <Dropdown time={'10:30'} title={'R2'} />
          </View>

          <View style={{ flexDirection: 'row' }}>
            <Dropdown time={'11:00'} title={'R1'} />
            <Dropdown time={'11:30'} title={'R2'} />
          </View>

          <View style={{ flexDirection: 'row' }}>
            <Dropdown time={'12:00'} title={'R1'} />
            <Dropdown time={'12:30'} title={'R2'} />
          </View>

          <View style={{ flexDirection: 'row' }}>
            <Dropdown time={'13:00'} title={'R1'} />
            <Dropdown time={'13:30'} title={'R2'} />
          </View>

          <View style={{ flexDirection: 'row' }}>
            <Dropdown time={'14:00'} title={'R1'} />
            <Dropdown time={'14:30'} title={'R2'} />
          </View>

          <View style={{ flexDirection: 'row' }}>
            <Dropdown time={'15:00'} title={'R1'} />
            <Dropdown time={'15:30'} title={'R2'} />
          </View>

        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  filling: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f1f9ff',
    padding: 11,
    marginHorizontal: 12,
    marginBottom: 16
  },
  drop: {
    flexDirection: 'row',
    paddingLeft: 8,
    marginHorizontal: 6,
    borderWidth: 1,
    alignItems: 'center',
    borderRadius: 7,
    borderColor: '#2699FB'
  }
})
