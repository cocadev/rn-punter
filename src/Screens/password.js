import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Header from '../Components/Header';
import styles from '../Config/styles';
import { p } from '../Config/normalize';
export default class Passwords extends Component {

  state={
    password: ''
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          title={'Password'}
          rightElement={(
            <MaterialCommunityIcons
              name="check"
              color={'#fff'} 
              size={p(24)}
            />)}
        />
        <View style={styles.view}>
          <Text style={styles.titleText}>Update Password</Text>
          <TextInput
            style={styles.textInput}
            secureTextEntry={true}
            onChangeText={(password) => this.setState({ password })}
            value={this.state.text}
          />
        </View>
      </View>
    );
  }
}
