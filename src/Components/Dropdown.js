import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from '../Config/styles';
import DateTimePicker from 'react-native-modal-datetime-picker';
import UtilService from '../Config/utils';

export default class Dropdown extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isDateTimePickerVisible: false,
            r_date: props.time,
        }
    }

    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });
    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });
    _handleDatePicked = (date) => {
        this.setState({ r_date: UtilService.getTime(date) });
        this._hideDateTimePicker();
    };

    startOpen = () => {
        this.setState({ isDateTimePickerVisible: true });
    }

    render() {
        return (
            <View style={{ flex: 1, marginHorizontal: 12 }}>
                <Text style={style.text}>{this.props.title}</Text>
                <TouchableOpacity onPress={this.startOpen} style={style.dropDown}>
                    <Text style={styles.noteText}>{this.state.r_date}</Text>
                    <MaterialCommunityIcons
                        name="chevron-down"
                        color={'#2699FB'}
                        size={24}
                    />
                </TouchableOpacity>
                <DateTimePicker
                    isVisible={this.state.isDateTimePickerVisible}
                    onConfirm={this._handleDatePicked}
                    onCancel={this._hideDateTimePicker}
                    is24Hour={true}
                    mode={'time'}
                />
            </View>
        );
    }
}

const style = StyleSheet.create({
    text: {
        fontSize: 13,
        color: '#2699FB',
    },
    dropDown: {
        height: 40,
        flexDirection: 'row',
        marginBottom: 11,
        marginTop: 2,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 12,
        paddingRight: 6,
        fontSize: 17,
        color: '#2699FB',
        borderColor: '#2699FB',
        borderWidth: 1
    }
})