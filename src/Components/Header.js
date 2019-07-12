import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import styles from '../Config/styles';

export default class Header extends Component {
  render() {
    return (
      <View style={style.container}>
        <Text styles={styles.headText}>Hello, Email!</Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 50,
        backgroundColor: '#2699FB',
    }
})