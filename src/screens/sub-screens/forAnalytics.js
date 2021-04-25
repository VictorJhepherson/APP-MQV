import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Api from '../../Api';

export default class forAnalytics extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };

        this.LogOut = this.LogOut.bind(this);
    };

    async LogOut() {
        let json = await Api.signOut();
        if(json.token == null) {
            await AsyncStorage.setItem('token', '');
            this.props.navigation.reset({
                routes: [{name: 'SignIn'}]
            });
        } else {
            alert('Não foi possível fazer Logout!');
        }
    }

    render() {
        return (
            <View style={styles.background}>
                <Text>forAnalytics</Text>
                <TouchableOpacity style={styles.logOutButton} onPress={()=>{ this.LogOut() }}>
                    <Text style={styles.logOutText}>Sair</Text>
                </TouchableOpacity>
            </View>
        );
    };
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
    },
    logOutButton: {
        height: 50,
        width: 350,
        backgroundColor: '#9B111E',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logOutText: {
        fontSize: 18,
        color: '#000000',
        fontWeight: 'bold'
    }
});