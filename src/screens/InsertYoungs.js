import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class InsertYoungs extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    };

    render() {
        return (
            <View style={styles.background}>
                <Text>InsertYoungs</Text>
                <TouchableOpacity onPress={()=>{ this.props.navigation.navigate('Home') }}>
                    <Text>Voltar</Text>
                </TouchableOpacity>
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