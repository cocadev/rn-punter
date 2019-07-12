import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Header from '../Components/Header';
import styles from '../Config/styles';

export default class Passwords extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header title={'Password'}/>
        <Text>Hello, Passwords!</Text>
      </View>
    );
  }
}
