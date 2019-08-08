import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from '../Config/styles';
import DateTimePicker from 'react-native-modal-datetime-picker';
import UtilService from '../Config/utils';
import { p } from '../Config/normalize';
import { showMessage } from "react-native-flash-message";

export default class Dropdown extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isDateTimePickerVisible: false,
            r_date: props.time,
            isOn: props.isOn
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
        if(number == 1 ){ 
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

        const off = parseInt(new Date().getTimezoneOffset()/60);
        const t = parseInt(this.props.time.substring(0, 2))+off ;
        const hour = t>24 ? t-24: (t<0?t+24:t);
        const minute = this.props.time.substring(3, 5)

        // console.log('h=', hour, 'm=', minute, 'off=', off)

        return (
            <View style={style.itemView}>

                <Text style={style.text}>{this.props.title}</Text>

                <TouchableOpacity 
                    onPress={this.startOpen} 
                    style={style.dropDown}
                >
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
                    date={new Date(`1970-04-11T${UtilService.padWithZero(hour)}:${minute}`)}   
                />

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