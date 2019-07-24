import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ActionSheetCustom as ActionSheet } from 'react-native-custom-actionsheet'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Actions } from 'react-native-router-flux';
import { p } from '../Config/normalize';
import Header from '../Components/Header';
import Dropdown from '../Components/Dropdown';
import ToggleSwitch from 'toggle-switch-react-native';
import styles from '../Config/styles';
import UtilService from '../Config/utils';

const options = [
  'Cancel',
  '30 min',
  '27 min',
  '25 min',
  '18 min',
]

export default class RaceTime extends Component {

  state = {
    meeting: 'RANDWICK',
    track: 'GOOD',
    rail: 'TRUE',
    race: '3',
    isOn: true,
    selected: 1,
    times: null,
    time_size: 30,
    default_time: 600 // 10: 00 AM
  }

  componentDidMount() {
    this.onAutoFilling()
  }

  onAutoFilling() {
    this.setState({ times: null })
    let times = [];
    const race_count = 8;
    for (let i = 1; i <= race_count; i++) {
      times.push({ id: i, time: UtilService.divideTime(this.state.default_time + (i - 1) * this.state.time_size) })
    }
    this.setState({ times })
  }

  showActionSheet = () => this.actionSheet.show()
  getActionSheetRef = ref => (this.actionSheet = ref)
  handlePress = index => {
    index > 0 && this.setState({
      selected: index,
      time_size: parseInt(options[index].substring(0, 2))
    })
    index > 0 && this.onAutoFilling()
  }

  onUpdate = (time) => {
    let hour = parseInt(time.substring(0, 2));
    let mins = parseInt(time.substring(3, 5));
    let hour_mins = hour * 60 + mins;
    this.setState({ default_time: hour_mins })
    this.onAutoFilling()
  }

  render() {

    const { selected, times } = this.state;

    return (
      <View style={styles.container}>

        <Header
          title={'Race Time'}
          rightElement={(
            <MaterialCommunityIcons
              onPress={() => {
                // Actions.races()
                console.log("***************************", this.state.times)

              }}
              name="arrow-right"
              color={'#fff'}
              size={p(24)}
            />)}
        />

        <View style={[styles.view, { marginHorizontal: p(12) }]}>

          <View style={style.filling}>
            <Text style={{ color: '#2699FB', fontWeight: '600', fontSize: p(14) }}>Auto-filling</Text>

            {
              this.state.isOn &&
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ color: '#2699FB', fontSize: p(14) }}>Every</Text>
                <TouchableOpacity onPress={this.showActionSheet} style={style.drop}>
                  <Text style={{ color: '#2699FB', fontSize: p(14) }}>{options[selected]}</Text>
                  <MaterialCommunityIcons
                    name="chevron-down"
                    color={'#2699FB'}
                    size={p(24)}
                  />
                </TouchableOpacity>
              </View>
            }

            <ToggleSwitch
              isOn={this.state.isOn}
              onColor='#2699FB'
              offColor='#EBEEF1'
              size='small'
              onToggle={(isOn) => this.setState({ isOn: !this.state.isOn })}
            />
          </View>

          {times && <FlatList
            data={times}
            renderItem={({ item, key }) => (
              <Dropdown 
                key={key}
                time={item.time} 
                title={'R' + item.id} 
                onClick={(x) => this.onUpdate(x)} 
              />
            )}
            numColumns={2}
            keyExtractor={(item, index) => index}
          />}

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
    height: p(40),
    padding: p(11),
    marginHorizontal: p(12),
    marginBottom: p(16)
  },
  drop: {
    flexDirection: 'row',
    paddingLeft: p(8),
    marginHorizontal: p(6),
    borderWidth: 1,
    alignItems: 'center',
    borderRadius: p(7),
    borderColor: '#2699FB'
  }
})
