import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from '../Config/styles';
import DateTimePicker from 'react-native-modal-datetime-picker';
import UtilService from '../Config/utils';
import { p } from '../Config/normalize';
import FlashMessage, { showMessage } from "react-native-flash-message";

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
        this.props.onClick(UtilService.getTime(date))
    };

    startOpen = () => {
        let number = this.props.title.substring(1);
        if(number == 1){ 
            this.setState({ isDateTimePickerVisible: true }); } 
         else {
            showMessage({
                message: "Error",
                description: "Auto filling should be R1",
                type: "danger",
                icon: 'danger'
              });
        }
    }

    render() {
        return (
            <View style={style.itemView}>
                <Text style={style.text}>{this.props.title}</Text>
                <TouchableOpacity onPress={this.startOpen} style={style.dropDown}>
                    <Text style={styles.noteText}>{this.state.r_date}</Text>
                    <MaterialCommunityIcons
                        name="chevron-down"
                        color={'#2699FB'}
                        size={p(24)}
                    />
                </TouchableOpacity>
                <DateTimePicker
                    isVisible={this.state.isDateTimePickerVisible}
                    onConfirm={this._handleDatePicked}
                    onCancel={this._hideDateTimePicker}
                    is24Hour={true}
                    mode={'time'}
                />
                <FlashMessage position={{ bottom: p(14)}} />
            </View>
        );
    }
}

const style = StyleSheet.create({
    itemView: {
        flex: 1,
        marginHorizontal: p(12)
    },
    text: {
        fontSize: p(13),
        color: '#2699FB',
    },
    dropDown: {
        height: p(40),
        flexDirection: 'row',
        marginBottom: p(11),
        marginTop: p(2),
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: p(12),
        paddingRight: p(6),
        fontSize: p(17),
        color: '#2699FB',
        borderColor: '#2699FB',
        borderWidth: 1
    }
})