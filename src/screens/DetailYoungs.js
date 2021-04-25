import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class DetailYoungs extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    };

    render() {
        return (
            <View style={styles.background}>
                <Text>DetailYoungs</Text>
            </View>
        );
    };
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});