import React, { Component } from 'react';
import { AppRegistry, Text, View, } from 'react-native';
import styles from './Styles';

export default class Stylesheets extends Component{
    render() {
        return (
            <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.boxText}>
                    I'mma box
                </Text>
            </View>
        </View>
        );
    }

};

AppRegistry.registerComponent(
    'Stylesheets',
    () => Stylesheets
);
