import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Image, KeyboardAvoidingView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { images } from '../Config/images';
import styles from '../Config/styles'
import { Actions } from 'react-native-router-flux';
import { p } from '../Config/normalize';
import CheckBox from 'react-native-check-box'


export default class Login extends Component {

  constructor() {
    super();
    this.state = {
      tipster: '',
      aff: '',
      isChecked: false
    }
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" enabled style={styles.container}>

        <ScrollView>
          <View style={{ alignItems: 'center', marginTop: p(50), marginBottom: p(20) }}>
            <Image source={images.main} style={{ width: p(225), height: p(111) }} />
          </View>

          <Text style={style.titleText}>Tipsters Login</Text>

          <View style={styles.view}>
            <TextInput
              style={style.textInput}
              placeholder={'Username'}
              placeholderTextColor={'#7fc7ff'}
              onChangeText={(tipster) => this.setState({ tipster })}
              value={this.state.tipster}
            />
          </View>
          <View style={[styles.view, { marginTop: p(12) }]}>
            <TextInput
              style={style.textInput}
              placeholder={'Password'}
              placeholderTextColor={'#7fc7ff'}
              onChangeText={(aff) => this.setState({ aff })}
              value={this.state.aff}
            />
          </View>

          <CheckBox
            style={{ paddingLeft: p(25), marginTop: p(12) }}
            checkBoxColor={'#2699FB'}
            onClick={() => {
              this.setState({
                isChecked: !this.state.isChecked
              })
            }}
            isChecked={this.state.isChecked}
            rightText={"Remember me"}
            rightTextStyle={{ fontSize: p(12), color: '#2699FB'}}
          />

          <View style={styles.view}>
            <TouchableOpacity style={style.btn} onPress={() => Actions.trackdetail()}>
              <Text style={style.btnText}>LOGIN</Text>
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
    borderRadius: p(23),
  },
  btnText: {
    color: '#fff',
    fontSize: p(16)
  },
  titleText: {
    marginTop: p(20),
    color: '#414244',
    fontSize: p(20),
    alignSelf: 'center'
  },
  textInput: {
    borderRadius: p(23),
    height: p(46),
    marginVertical: p(9),
    padding: p(12),
    fontSize: p(15),
    color: '#111',
    borderColor: '#2699FB',
    borderWidth: 1
  },
})
