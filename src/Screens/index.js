import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from '../Config/styles'

export default class Index extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello, Index!</Text>
      </View>
    );
  }
}
