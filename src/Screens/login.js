import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Image, KeyboardAvoidingView, AsyncStorage, Platform } from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { images } from '../Config/images';
import { showMessage } from "react-native-flash-message";
import { p } from '../Config/normalize';
import { SERVICE_API_URL } from '../Config/config';
import CheckBox from 'react-native-check-box';
import styles from '../Config/styles';
import ValidateService from '../Config/validate';
import axios from 'axios';
import Cache from '../Config/cache';

export default class Login extends Component {

  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      isChecked: false
    }
  }

  login = () => {

    const { username, password } = this.state;

    var bug = ValidateService.login(username, password)
    if (bug) {
      showMessage({
        message: "Validation error",
        description: bug,
        type: "danger",
        icon: 'danger'
      });
    } else {
      axios.post(`${SERVICE_API_URL}json/data_login.php`,{ username, password })
      .then(res => {
        var result = res.data;
        if (result.result) {
          showMessage({
            message: "Login Success",
            description: "Success",
            type: "success",
            icon: 'success'
          });
          this._retrieveData(result.token)
        } else {
          showMessage({
            message: "Login Fail",
            description: result.message,
            type: "danger",
            icon: 'danger'
          });
        }
      })
      .catch(e => console.log('errsssssssssssssssssssssssss', e))
    }
  }

  _retrieveData = async (x) => {
    try {
      const token = await AsyncStorage.setItem('TOKEN', x);
      Cache.ACCESS_TOKEN = token;
      this.props.login();
    } catch (error) {
      console.log('error', error);
    }
  };

  render() {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? null : 'padding'} 
        enabled
        keyboardVerticalOffset={p(30)}
        style={styles.container}
      >

          <View style={{ alignItems: 'center', marginTop: p(50), marginBottom: p(20) }}>
            <Image source={images.main} style={{ width: p(225), height: p(111) }} />
          </View>

          <ScrollView style={{ flex: 1}}>

          <Text style={style.titleText}>Tipsters Login</Text>

          <View style={styles.view}>
            <TextInput
              style={style.textInput}
              placeholder={'Username'}
              placeholderTextColor={'#7fc7ff'}
              onChangeText={(username) => this.setState({ username })}
              value={this.state.username}
            />
          </View>

          <View style={[styles.view, { marginTop: p(12) }]}>
            <TextInput
              style={style.textInput}
              placeholder={'Password'}
              placeholderTextColor={'#7fc7ff'}
              onChangeText={(password) => this.setState({ password })}
              value={this.state.password}
              secureTextEntry={true}
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
            rightTextStyle={{ fontSize: p(12), color: '#2699FB' }}
          />

          <View style={styles.view}>
            <TouchableOpacity style={style.btn} onPress={this.login}>
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
