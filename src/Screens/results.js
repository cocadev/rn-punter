import React, { Component } from 'react';
import { Text, View, FlatList, StyleSheet, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { p } from '../Config/normalize';
import Header from '../Components/Header';

const myResults = [
  { id: 1, times: '10:00', no1: "0", no2: "1", no3: "0", no4: "1", no5: "0", name: "WESTURN SUN", legend: "1" },
  { id: 2, times: '10:20', no1: "0", no2: "1", no3: "0", no4: "1", no5: "0", name: "LEGEION COMMANDAR", legend: "1" },
  { id: 3, times: '10:40', no1: "6", no2: "4", no3: "3", no4: "1", no5: "7", name: "SKELETON KING", legend: "4" },
  { id: 4, times: '11:00', no1: "6", no2: "1", no3: "3", no4: "1", no5: "11", name: "SKELETON KING", legend: "3" },
  { id: 5, times: '11:20', no1: "2", no2: "1", no3: "3", no4: "1", no5: "7", name: "SKELETON KING", legend: "5" },
  { id: 6, times: '11:40', no1: "6", no2: "3", no3: "3", no4: "10", no5: "7", name: "SKELETON KING", legend: "1" },
  { id: 7, times: '12:00', no1: "9", no2: "1", no3: "3", no4: "1", no5: "7", name: "SKELETON KING", legend: "1" },
  { id: 8, times: '12:20', no1: "3", no2: "1", no3: "3", no4: "1", no5: "8", name: "SKELETON KING", legend: "8" }
]

const colors = [
  '#fff',
  '#fff',
  '#231F20',
  '#6C3B97',
  '#1FAF4C',
  '#EBC21A',
  '#BCBDC2',
  '#8EC742',
  '#29B4E5',
  '#92D5DA',
  '#F9ED00',
  '#2BB4E4',
  '#E5A0C7'
]

const Tcolors = [
  '#111',
  '#111',
  '#fff',
  '#fff',
  '#fff',
  '#111',
  '#111',
  '#fff',
  '#111',
  '#111',
  '#111',
  '#fff',
  '#fff'
]

export default class Results extends Component {

  _renderItem = ({ item, index }) => (
    <View style={{ flexDirection: 'row' }}>
      <View style={[index == 0 ? styles.item2 : styles.item, { borderLeftWidth: 2, width: 120, backgroundColor: '#a6a6a6' }]}>
        <Text style={[styles.itemText, { color: '#fff' }]}>{item.times}</Text>
      </View>
      <View style={[index == 0 ? styles.item2 : styles.item, { backgroundColor: '#d9d9d9' }]}>
        <Text style={styles.itemText}>{item.id}</Text>
      </View>
      <View style={[index == 0 ? styles.item2 : styles.item, { backgroundColor: colors[item.legend]}]}>
        <Text style={[styles.itemText, { color: Tcolors[item.legend]}]}>{item.no1}</Text>
      </View>
      <View style={[index == 0 ? styles.item2 : styles.item, { backgroundColor: colors[item.legend == 8 ? item.legend : 1]}]}>
        <Text style={[styles.itemText, { color: Tcolors[item.legend == 8 && item.legend]}]}>{item.no2}</Text>
      </View>
      <View style={[index == 0 ? styles.item2 : styles.item, { backgroundColor: colors[item.legend == 8 ? item.legend : 1]}]}>
        <Text style={[styles.itemText, { color: Tcolors[item.legend == 8 && item.legend]}]}>{item.no3}</Text>
      </View>
      <View style={[index == 0 ? styles.item2 : styles.item, { backgroundColor: colors[item.legend == 8 ? item.legend : 1]}]}>
        <Text style={[styles.itemText, { color: Tcolors[item.legend == 8 && item.legend]}]}>{item.no4}</Text>
      </View>
      <View style={[index == 0 ? styles.item2 : styles.item, { backgroundColor: colors[item.legend == 8 ? item.legend : 1]}]}>
        <Text style={[styles.itemText, { color: Tcolors[item.legend == 8 && item.legend]}]}>{item.no5}</Text>
      </View>
      <View style={[index == 0 ? styles.item2 : styles.item, { width: 300, backgroundColor: colors[item.legend] }]}>
        <Text style={[styles.itemText, { color: Tcolors[item.legend == 8 && item.legend] }]}>{item.name}</Text>
      </View>
      <View style={[index == 0 ? styles.item2 : styles.item, { width: 120, backgroundColor: colors[item.legend] }]}>
        <Text style={[styles.itemText, { color: Tcolors[item.legend] }]}>{'2.5'}</Text>
      </View>

    </View>
  )

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header
          title={'Results'}
          rightElement={(
            <MaterialCommunityIcons
              name="knife-military"
              color={'#fff'}
              size={p(24)}
            />)}
        />
        <ScrollView horizontal style={{ margin: p(12) }}>
          <View>
            <View>
              <View style={{ flexDirection: 'row', }}>
                <View style={[styles.item, { borderLeftWidth: 2, borderBottomWidth: 0, borderTopWidth: 2, width: 120, backgroundColor: '#a6a6a6' }]}>
                  <Text style={[styles.itemText, { color: '#fff' }]}>{'START'}</Text>
                </View>
                <View style={[styles.item, { width: 876, borderBottomWidth: 0, borderTopWidth: 2,  alignItems: 'flex-start', paddingLeft: 10, backgroundColor: '#d9d9d9'}]}>
                  <Text style={[styles.itemText, { color: '#111', textAlign: 'left' }]}>{'PAKENHAM : Track SYNTHETIC - TRUE'}</Text>
                </View>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <View style={[styles.item, { borderLeftWidth: 2, borderBottomWidth: 0, width: 120, backgroundColor: '#a6a6a6' }]}>
                  <Text style={[styles.itemText, { color: '#fff' }]}>{'TIME'}</Text>
                </View>
                <View style={[styles.item, { width: 876, borderBottomWidth: 0,  justifyContent: 'flex-start', flexDirection: 'row', backgroundColor: '#d9d9d9'}]}>
                  <Text style={[styles.itemText, { color: '#111', flex: 1 }]}>{'THE HAMMER'}</Text>
                  <Text style={[styles.itemText, { color: '#111', flex: 1 }]}>{'LADBROKES'}</Text>
                </View>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <View style={[styles.item, { borderLeftWidth: 2, borderBottomWidth: 0, width: 120, backgroundColor: '#a6a6a6' }]}>
                  <Text style={[styles.itemText, { color: '#fff' }]}>{'AEST'}</Text>
                </View>
                <View style={[styles.item, { width: 876, borderBottomWidth: 0,  justifyContent: 'flex-start', flexDirection: 'row', paddingLeft: 10, backgroundColor: '#d9d9d9' }]}>
                  <Text style={[styles.itemText, { color: '#111', textAlign: 'left', width: 76 }]}>{'Race'}</Text>
                  <Text style={[styles.itemText, { color: '#111', textAlign: 'left', width: 410 }]}>{'Selections'}</Text>
                  <Text style={[styles.itemText, { color: '#111', textAlign: 'left', flex: 1 }]}>{'THE HAMMER\'s Tips'}</Text>
                  <Text style={[styles.itemText, { color: '#111', textAlign: 'left', width: 70 }]}>{'Odds'}</Text>
                </View>
              </View>
            </View>
            <FlatList
              data={this.props.results}
              keyExtractor={(item, i) => String(i)}
              renderItem={this._renderItem}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    width: 76,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    paddingHorizontal: 18,
    borderColor: '#111',
    borderWidth: 2,
    borderTopWidth: 0,
    borderLeftWidth: 0
  },
  item2: {
    width: 76,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    paddingHorizontal: 18,
    borderColor: '#111',
    borderWidth: 2,
    // borderTopWidth: 2,
    borderLeftWidth: 0
  },
  itemText: {
    color: '#111',
    fontWeight: '600',
    fontSize: 24,
    textAlign: 'center'
  }
})

