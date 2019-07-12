import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import styles from '../Config/styles'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Index extends Component {

  constructor(){
    super();
    this.state={
      tipster:'BEHIND THE BARRIER',
      aff: 'CROWNBET'
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={style.header}>
          <Text style={styles.headText}>MYPUNTER TIPS & SELECTIONS</Text>
          <MaterialCommunityIcons name="settings" color={'#fff'} size={22} style={{ position: 'absolute', right: 15}}/>
        </View>
        <View style={styles.view}>
          <Text style={{ fontSize:12, color: '#2699FB'}}>Select Tipster</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(tipster) => this.setState({ tipster })}
            value={this.state.tipster}
          />
        </View>
        <View style={[styles.view, { marginTop: 12}]}>
          <Text style={{ fontSize:12, color: '#2699FB'}}>Select Affiliates</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(aff) => this.setState({ aff })}
            value={this.state.aff}
          />
        </View>

        <View style={styles.view}>
          <TouchableOpacity style={style.btn}>
            <Text style={style.btnText}>START NEW TIPS</Text>
          </TouchableOpacity>
        </View>


      </View>
    );
  }
}

const style = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    justifyContent: 'center',
    height: 50,
    backgroundColor: '#2699FB',
  },
  btn:{
    backgroundColor: '#2699FB',
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    borderRadius: 4
  },
  btnText: {
    backgroundColor: '#2699FB',
    color: '#fff',
    fontSize: 16
  }
})
