import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Actions } from 'react-native-router-flux';
import { p } from '../Config/normalize';
import styles from '../Config/styles';

export default class Header extends Component {
    render() {
        return (
            <View style={style.container}>
                <MaterialCommunityIcons               
                    onPress={()=>Actions.pop()}
                    name="arrow-left" 
                    color={'#fff'} 
                    size={p(24)}
                />
                <Text style={styles.headText}>{this.props.title}</Text>
                {this.props.rightElement}
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: p(12),
        justifyContent: 'space-between',
        height: p(50),
        backgroundColor: '#2699FB',
    }
})