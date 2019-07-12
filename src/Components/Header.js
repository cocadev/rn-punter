import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import styles from '../Config/styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default class Header extends Component {
    render() {
        return (
            <View style={style.container}>
                <MaterialCommunityIcons name="arrow-left" color={'#fff'} size={28} />
                <Text style={styles.headText}>{this.props.title}</Text>
                <MaterialCommunityIcons name="check" color={'#fff'} size={28} />
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
        justifyContent: 'space-between',
        height: 50,
        backgroundColor: '#2699FB',
    }
})