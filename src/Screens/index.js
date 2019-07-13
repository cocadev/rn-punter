import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Image, KeyboardAvoidingView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { images } from '../Config/images';
import styles from '../Config/styles'
import { Actions } from 'react-native-router-flux';

export default class Index extends Component {

  constructor() {
    super();
    this.state = {
      tipster: 'BEHIND THE BARRIER',
      aff: 'CROWNBET'
    }
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" enabled style={styles.container}>
        <View style={style.header}>
          <Text style={styles.headText}>MYPUNTER TIPS & SELECTIONS</Text>
             <MaterialCommunityIcons onPress={()=>Actions.settings()} name="settings" color={'#fff'} size={22} style={{ position: 'absolute', right: 15 }} />
        </View>
        <ScrollView>
          <View style={{ alignItems: 'center', marginTop: 50, marginBottom: 20 }}>
            <Image source={images.main} style={{ width: 225, height: 111 }} />
          </View>

          <View style={styles.view}>
            <Text style={{ fontSize: 12, color: '#2699FB' }}>Select Tipster</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(tipster) => this.setState({ tipster })}
              value={this.state.tipster}
            />
          </View>
          <View style={[styles.view, { marginTop: 12 }]}>
            <Text style={{ fontSize: 12, color: '#2699FB' }}>Select Affiliates</Text>
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
        </ScrollView>

      </KeyboardAvoidingView>
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
  btn: {
    marginTop: 20,
    backgroundColor: '#2699FB',
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    borderRadius: 4
  },
  btnText: {
    color: '#fff',
    fontSize: 16
  }
})
