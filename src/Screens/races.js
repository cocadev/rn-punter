import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, FlatList, KeyboardAvoidingView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Header from '../Components/Header';
import ToggleSwitch from 'toggle-switch-react-native';
import styles from '../Config/styles';
import { p } from '../Config/normalize';

export default class Races extends Component {

  constructor(props) {
    super(props);

    this.state = {
      myRaces: null
    }
  }

  componentDidMount(){

    let myRaces= [];
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
        name: ""
      })
    }
    this.setState({ myRaces })
  }

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
                  newArray1[index]['no1'] = no1 ;
                  this.setState({ myRaces: newArray1 });
                }}
                keyboardType={'numeric'}
              />
              <TextInput
                style={style.box}
                onChangeText={(no2) => {
                  let newArray2 = [...this.state.myRaces];
                  newArray2[index]['no2'] = no2 ;
                  this.setState({ myRaces: newArray2 });
                }}
                keyboardType={'numeric'}
              />
              <TextInput
                style={style.box}
                onChangeText={(no3) => {
                  let newArray3 = [...this.state.myRaces];
                  newArray3[index]['no3'] = no3 ;
                  this.setState({ myRaces: newArray3 });
                }}
                keyboardType={'numeric'}
              />
              <TextInput
                style={style.box}
                onChangeText={(no4) => {
                  let newArray4 = [...this.state.myRaces];
                  newArray4[index]['no4'] = no4 ;
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
            <View style={[style.box2, { marginRight: 0 }]}>
              <Text style={style.title}>{(parseInt(item.no1) + parseInt(item.no2) + parseInt(item.no3) + parseInt(item.no4) + parseInt(item.no5)) / 5}</Text>
            </View>
          </View>
        </View>

        <View style={{ marginTop: p(8) }}>
          <Text style={styles.normalText}>Name</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(name) => {
              let newArrayName = [...this.state.myRaces];
              newArrayName[index]['name'] = name ;
              this.setState({ myRaces: newArrayName });
            }}
            value={item.name}
          />
        </View>

        <View style={{ marginTop: p(8) }}>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={[styles.normalText, { color: !item.isOn ? '#BCE0FE' : '#2699FB' }]}>Does this Race require the selections legend?</Text>
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
            editable={true}
            onChangeText={(legend) => this.setState({ legend })}
            value={item.isOn ? item.legend : ''}
          />
        </View>

      </View>
    </View>
  )

  render() {

    return (
      <KeyboardAvoidingView
        behavior="padding"
        enabled
        keyboardVerticalOffset={p(20)}
        style={styles.container}
      >

        <Header
          title={'Races'}
          rightElement={(
            <MaterialCommunityIcons
              onPress={() => { alert(JSON.stringify(this.state.myRaces)) }}
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
    borderWidth: 1
  },
  title: {
    color: '#2699FB',
    fontWeight: '600',
    fontSize: p(13)
  }
})
