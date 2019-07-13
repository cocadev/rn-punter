import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Header from '../Components/Header';
import ToggleSwitch from 'toggle-switch-react-native';
import styles from '../Config/styles';
import { p } from '../Config/normalize';

const RACES = [
  { id: 1, no1: 1, no2:2, no3: 1, no4: 4, no5:3, name: 'SHARKYS', legend: 'SPECIAL', isOn: true },
  { id: 2, no1: 6, no2:2, no3: 1, no4: 4, no5:3, name: 'Sniper', legend: 'Normal', isOn: false },
  { id: 3, no1: 1, no2:3, no3: 3, no4: 4, no5:1, name: 'Sven', legend: 'Extreme', isOn: true },
  { id: 4, no1: 1, no2:2, no3: 1, no4: 4, no5:3, name: 'Legion Commandar', legend: 'Poor', isOn: true },
  { id: 5, no1: 2, no2:1, no3: 2, no4: 4, no5:3, name: 'Dragon Night', legend: 'Good', isOn: false },
  { id: 6, no1: 1, no2:2, no3: 1, no4: 4, no5:1, name: 'Invoker', legend: 'Normal', isOn: true },
  { id: 7, no1: 4, no2:2, no3: 1, no4: 4, no5:3, name: 'Geomancer', legend: 'Less', isOn: true },
  { id: 8, no1: 1, no2:5, no3: 2, no4: 2, no5:4, name: 'Sladar', legend: 'Bad', isOn: false },
  { id: 9, no1: 1, no2:5, no3: 6, no4: 1, no5:4, name: 'Alchimist', legend: 'Bad', isOn: false },
  { id: 10, no1: 1, no2:5, no3: 8, no4: 2, no5:4, name: 'Medusa', legend: 'Bad', isOn: false },
  { id: 11, no1: 1, no2:5, no3: 2, no4: 7, no5:8, name: 'Pugna', legend: 'Bad', isOn: true },
  { id: 12, no1: 5, no2:5, no3: 4, no4: 9, no5:9, name: 'Lexxar', legend: 'Bad', isOn: false },
]

export default class Races extends Component {

  state = {
    meeting: 'RANDWICK',
    track: 'GOOD',
    rail: 'TRUE',
    race: '3',
    name: 'SHARKYS',
    legend: 'SPECIAL'
  }

  _renderItem = ({ item, key }) => (
    <View style={[styles.view, { marginHorizontal: p(6), marginTop: p(5) }]} key={key}>
      <View style={style.filling}>
        <Text style={[style.title, { textAlign: 'center' }]}>RACE {item.id}</Text>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 4 }}>
            <Text style={styles.normalText}>No.</Text>
            <View style={{ flexDirection: 'row' }}>
              <View style={style.box}>
                <Text style={style.title}>{item.no1}</Text>
              </View>
              <View style={style.box}>
                <Text style={style.title}>{item.no2}</Text>
              </View>
              <View style={style.box}>
                <Text style={style.title}>{item.no3}</Text>
              </View>
              <View style={style.box}>
                <Text style={style.title}>{item.no4}</Text>
              </View>
              <View style={style.box}>
                <Text style={style.title}>{item.no5}</Text>
              </View>
            </View>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.normalText}>Odds</Text>
            <View style={style.box2}>
              <Text style={style.title}>{(item.no1+item.no2+item.no3+item.no4+item.no5)/5}</Text>
            </View>
          </View>
        </View>

        <View style={{ marginTop: p(8) }}>
          <Text style={styles.normalText}>Name</Text>
          <TextInput
            style={styles.textInput}
            editable={false}
            onChangeText={(name) => this.setState({ name })}
            value={item.name}
          />
        </View>

        <View style={{ marginTop: p(8) }}>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={[styles.normalText, { color: !item.isOn ? '#BCE0FE': '#2699FB'}]}>Does this Race require the selections legend?</Text>
            <ToggleSwitch
              isOn={item.isOn}
              onColor='#2699FB'
              offColor='#EBEEF1'
              size='small'
              onToggle={(isOn) => this.setState({ isOn: !this.state.isOn })}
            />
          </View>

          <TextInput
            style={styles.textInput}
            editable={false}
            onChangeText={(legend) => this.setState({ legend })}
            value={item.isOn ? item.legend: ''}
          />
        </View>

      </View>
    </View>
  )

  render() {

    return (
      <View style={styles.container}>

        <Header
          title={'Races'}
          rightElement={(
            <MaterialCommunityIcons
              name="check"
              color={'#fff'}
              size={25}
            />)}
        />

        <FlatList
          style={{ marginTop: p(12) }}
          data={RACES}
          keyExtractor={(item, i) => String(i)}
          renderItem={this._renderItem}
        />

      </View>
    );
  }
}

const style = StyleSheet.create({
  filling: {
    justifyContent: 'space-between',
    backgroundColor: '#f1f9ff',
    padding: p(15),
    marginHorizontal: p(12),
    marginBottom: p(16)
  },
  box: {
    width: p(36),
    height: p(36),
    marginRight: p(5),
    marginVertical: p(5),
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#2699FB',
    borderWidth: 1
  },
  box2: {
    height: p(36),
    marginRight: p(5),
    marginVertical: p(5),
    paddingLeft: p(8),
    justifyContent: 'center',
    borderColor: '#2699FB',
    borderWidth: 1
  },
  title: {
    color: '#2699FB',
    fontWeight: '600',
    fontSize: p(15)
  }
})
