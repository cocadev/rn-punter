import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';
import Header from '../Components/Header';
import styles from '../Config/styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default class Email extends Component {

  state = {
    send: 'paul@desertsoftware.com.au',
    and: 'info@desertsoftware.com.au',
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          title={'Email'}
          rightElement={(
            <MaterialCommunityIcons
              name="check"
              color={'#fff'}
              size={28}
            />)}
        />
        <View style={styles.view}>
          <Text style={styles.titleText}>Send Tips To</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(send) => this.setState({ send })}
            value={this.state.send}
          />

          <Text style={styles.titleText}>And To</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(and) => this.setState({ and })}
            value={this.state.and}
          />

        </View>
      </View>
    );
  }
}
