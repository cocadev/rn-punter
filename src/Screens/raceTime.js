import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Header from '../Components/Header';
import Dropdown from '../Components/Dropdown';
import ToggleSwitch from 'toggle-switch-react-native';
import styles from '../Config/styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ActionSheetCustom as ActionSheet } from 'react-native-custom-actionsheet'
import { TouchableOpacity } from 'react-native-gesture-handler';

const options = [
  'Cancel',
  '30 min',
  '1 hour',
  '2 hours',
  '3 hours',
]

export default class RaceTime extends Component {

  state = {
    meeting: 'RANDWICK',
    track: 'GOOD',
    rail: 'TRUE',
    race: '3',
    isOn: true,
    selected: 1,
  }

  showActionSheet = () => this.actionSheet.show()
  getActionSheetRef = ref => (this.actionSheet = ref)
  handlePress = index => {
    index > 0 && this.setState({ selected: index })
  }

  render() {

    const { selected } = this.state;

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

        <View style={[styles.view, { marginHorizontal: 12 }]}>

          <View style={style.filling}>
            <Text style={{ color: '#2699FB', fontWeight: '600' }}>Auto-filling</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ color: '#2699FB' }}>Every</Text>
              <TouchableOpacity onPress={this.showActionSheet} style={style.drop}>
                <Text style={{ color: '#2699FB' }}>{options[selected]}</Text>
                <MaterialCommunityIcons
                  name="chevron-down"
                  color={'#2699FB'}
                  size={24}
                />
              </TouchableOpacity>
            </View>
            <ToggleSwitch
              isOn={this.state.isOn}
              onColor='#2699FB'
              offColor='#EBEEF1'
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

        <ActionSheet
          ref={this.getActionSheetRef}
          options={options}
          cancelButtonIndex={0}
          destructiveButtonIndex={selected}
          onPress={this.handlePress}
        />

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
