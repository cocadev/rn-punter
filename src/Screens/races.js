import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, FlatList, KeyboardAvoidingView, Platform } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { p } from '../Config/normalize';
import { ActionSheetCustom as ActionSheet } from 'react-native-custom-actionsheet'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Header from '../Components/Header';
import ToggleSwitch from 'toggle-switch-react-native';
import styles from '../Config/styles';
import { Actions } from 'react-native-router-flux';

const options = [
  'Cancel',
  '',
  'Double Up Tip',
  'Special',
  'Best Bet',
  'Eachway',
  'First 2',
  'First 3',
  'First 4',
  'Best Roughie'
]

export default class Races extends Component {

  constructor(props) {
    super(props);
    this.state = {
      myRaces: null,
      legend: 0,
      selected: 0,
    }
  }

  componentDidMount() {

    let myRaces = [];
    let times = this.props.times;

    for (let i = 0; i < times.length; i++) {
      myRaces.push({
        id: times[i].id,
        times: times[i].time,
        no1: "0",
        no2: "0",
        no3: "0",
        no4: "0",
        no5: "0",
        odds: "",
        name: "",
        legend: "1"
      })
    }
    this.setState({ myRaces })
  }

  getActionSheetRef = ref => (this.actionSheet = ref)

  _renderItem = ({ item, index }) => (
    <View style={[styles.view, { marginHorizontal: p(6), marginTop: p(5) }]} key={index}>
      <View style={style.filling}>
        <Text style={[style.title, { textAlign: 'center' }]}>RACE {item.id}</Text>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 4 }}>
            <Text style={styles.normalText}>No.</Text>
            <View style={{ flexDirection: 'row' }}>
              <TextInput
                style={style.box}
                onChangeText={(no1) => {
                  let newArray1 = [...this.state.myRaces];
                  newArray1[index]['no1'] = no1;
                  this.setState({ myRaces: newArray1 });
                }}
                keyboardType={'numeric'}
              />
              <TextInput
                style={style.box}
                onChangeText={(no2) => {
                  let newArray2 = [...this.state.myRaces];
                  newArray2[index]['no2'] = no2;
                  this.setState({ myRaces: newArray2 });
                }}
                keyboardType={'numeric'}
              />
              <TextInput
                style={style.box}
                onChangeText={(no3) => {
                  let newArray3 = [...this.state.myRaces];
                  newArray3[index]['no3'] = no3;
                  this.setState({ myRaces: newArray3 });
                }}
                keyboardType={'numeric'}
              />
              <TextInput
                style={style.box}
                onChangeText={(no4) => {
                  let newArray4 = [...this.state.myRaces];
                  newArray4[index]['no4'] = no4;
                  this.setState({ myRaces: newArray4 });
                }}
                keyboardType={'numeric'}
              />
              <TextInput
                style={style.box}
                onChangeText={(no5) => {
                  let newArray5 = [...this.state.myRaces];
                  newArray5[index]['no5'] = no5;
                  this.setState({ myRaces: newArray5 });
                }}
                keyboardType={'numeric'}
              />
            </View>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.normalText}>Odds</Text>
            <TextInput
                style={style.box2}
                onChangeText={(odds) => {
                  let newArrayOdds = [...this.state.myRaces];
                  newArrayOdds[index]['odds'] = odds;
                  this.setState({ myRaces: newArrayOdds });
                }}
                keyboardType={'numeric'}
              />
          </View>
        </View>

        <View style={{ marginTop: p(8) }}>
          <Text style={styles.normalText}>Name</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(name) => {
              let newArrayName = [...this.state.myRaces];
              newArrayName[index]['name'] = name;
              this.setState({ myRaces: newArrayName });
            }}
            value={item.name}
          />
        </View>

        <View style={{ marginTop: p(8) }}>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={[styles.normalText, { color: item.isOn ? '#BCE0FE' : '#2699FB' }]}>Does this Race require the selections legend?</Text>
            {/* <ToggleSwitch
              isOn={item.isOn}
              onColor='#2699FB'
              offColor='#EBEEF1'
              size='small'
              onToggle={(isOn) => this.setState({ isOn: !this.state.isOn })}
            /> */}
          </View>

          <TouchableOpacity
            style={style.legend}
            onPress={() => {
              this.setState({ selected: index })
              this.actionSheet.show()
            }}>
            <Text style={{ fontSize: p(15), color: '#2699FB' }}>{options[item.legend]}</Text>
          </TouchableOpacity>

        </View>

      </View>
    </View> 
  )

  handlePress = index => {
    if(index > 0 ){
      let newArray = [...this.state.myRaces];
      newArray[this.state.selected]['legend'] = index;
      this.setState({ myRaces: newArray, legend: index });
    }
  }

  render() {

    const { legend } = this.state

    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        enabled
        keyboardVerticalOffset={p(20)}
        style={styles.container}
      >

        <Header
          title={'Races'}
          rightElement={(
            <MaterialCommunityIcons
              onPress={() => Actions.results({results: this.state.myRaces})}
              name="check"
              color={'#fff'}
              size={p(24)}
            />)}
        />

        <FlatList
          style={{ marginTop: p(12) }}
          data={this.state.myRaces}
          keyExtractor={(item, i) => String(i)}
          renderItem={this._renderItem}
          extraData={this.state}
        />

        <ActionSheet
          ref={this.getActionSheetRef}
          options={options}
          cancelButtonIndex={0}
          destructiveButtonIndex={legend}
          onPress={this.handlePress}
        />

      </KeyboardAvoidingView>
    );
  }
}

const style = StyleSheet.create({
  filling: {
    justifyContent: 'space-between',
    backgroundColor: '#f1f9ff',
    padding: p(15),
    marginHorizontal: p(12),
    marginBottom: p(16),
  },
  box: {
    width: p(40),
    height: p(40),
    marginRight: p(5),
    marginVertical: p(5),
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#2699FB',
    borderWidth: 1,
    fontSize: p(13),
    color: '#2699FB',
  },
  box2: {
    height: p(40),
    marginRight: p(5),
    marginVertical: p(5),
    paddingLeft: p(14),
    justifyContent: 'center',
    borderColor: '#2699FB',
    borderWidth: 1,
    fontSize: p(13),
    color: '#2699FB',
  },
  title: {
    color: '#2699FB',
    fontWeight: '600',
    fontSize: p(13)
  },
  legend: {
    height: p(46),
    marginVertical: p(9),
    padding: p(12),
    borderColor: '#2699FB',
    borderWidth: 1
  }
})
