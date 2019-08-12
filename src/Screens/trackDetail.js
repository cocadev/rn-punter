import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Actions } from 'react-native-router-flux';
import { p } from '../Config/normalize';
import { showMessage } from "react-native-flash-message";
import Header from '../Components/Header';
import styles from '../Config/styles';
import ValidateService from '../Config/validate';
import Cache from '../Config/cache';

export default class TrackDetail extends Component {

  state = {
    meeting: "",
    track: "",
    rail: "",
    race: "",
  }

  validate=()=>{

    const { meeting, track, rail, race } = this.state;
    var err = ValidateService.trackDetails(meeting, track, rail, race);

    if(err){
      showMessage({
        message: "Validation error",
        description: err,
        type: "danger",
        icon: 'danger'
      });
    } else{
      Cache.Meeting = meeting;
      Cache.Track = track;
      Cache.Rail = rail;
      Actions.racetime({ count: this.state.race})
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          title={'Track Details'}
          rightElement={(
            <MaterialCommunityIcons
              onPress={this.validate}
              name="arrow-right"
              color={'#fff'}
              size={p(24)}
            />)}
        />
        <View style={styles.view}>
          <Text style={styles.titleText}>Meetings</Text>
          <TextInput
            style={styles.textInput}
            placeholder={'RANDWICK'}
            onChangeText={(meeting) => this.setState({ meeting })}
            value={this.state.meeting}
          />

          <Text style={styles.titleText}>Track Condition</Text>
          <TextInput
            style={styles.textInput}
            placeholder={'GOOD'}
            onChangeText={(track) => this.setState({ track })}
            value={this.state.track}
          />

          <Text style={styles.titleText}>Rail</Text>
          <TextInput
            style={styles.textInput}
            placeholder={'TRUE'}
            onChangeText={(rail) => this.setState({ rail })}
            value={this.state.rail}
          />

          <Text style={styles.titleText}>How many races?</Text>
          <TextInput
            style={styles.textInput}
            placeholder={'6'}
            keyboardType={'numeric'}
            onChangeText={(race) => this.setState({ race })}
            value={this.state.race}
          />
        </View>
      </View>
    );
  }
}
