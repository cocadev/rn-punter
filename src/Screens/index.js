import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { images } from '../Config/images';
import styles from '../Config/styles'
import { Actions } from 'react-native-router-flux';
import { p } from '../Config/normalize';
import Cache from '../Config/cache';
import ValidateService from '../Config/validate';
import { showMessage } from "react-native-flash-message";

export default class Index extends Component {

  constructor() {
    super();
    this.state = {
      tipster: '',
      aff: ''
    }
  }

  goon=()=>{
    const { tipster, aff } = this.state;
    var bug = ValidateService.Tips(tipster, aff);
    if (bug) {
      showMessage({
        message: "Validation error",
        description: bug,
        type: "danger",
        icon: 'danger'
      });
    } else {
      Cache.Tipster = tipster;
      Cache.Aff = aff;
      Actions.trackdetail()
    }
  }

  render() {
    return (
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? null : 'padding'} 
        enabled
        style={styles.container} 
        keyboardVerticalOffset={p(50)}
      >
        <View style={style.header}>
          <Text style={styles.headText}>MYPUNTER TIPS & SELECTIONS</Text>
          <MaterialCommunityIcons onPress={() => Actions.settings()} name="settings" color={'#fff'} size={p(22)} style={{ position: 'absolute', right: p(15) }} />
        </View>
        <ScrollView>
          <View style={{ alignItems: 'center', marginTop: p(50), marginBottom: p(20) }}>
            <Image source={images.main} style={{ width: p(225), height: p(111) }} />
          </View>

          <View style={styles.view}>
            <Text style={{ fontSize: p(12), color: '#2699FB' }}>Select Tipster</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(tipster) => this.setState({ tipster })}
              value={this.state.tipster}
            />
          </View>
          <View style={[styles.view, { marginTop: p(12) }]}>
            <Text style={{ fontSize: p(12), color: '#2699FB' }}>Select Affiliates</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(aff) => this.setState({ aff })}
              value={this.state.aff}
            />
          </View>

          <View style={styles.view}>
            <TouchableOpacity style={style.btn} onPress={this.goon}>
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
    paddingHorizontal: p(12),
    justifyContent: 'center',
    height: p(50),
    backgroundColor: '#2699FB',
  },
  btn: {
    marginTop: p(20),
    backgroundColor: '#2699FB',
    justifyContent: 'center',
    alignItems: 'center',
    height: p(45),
    borderRadius: 4
  },
  btnText: {
    color: '#fff',
    fontSize: p(16)
  }
})
