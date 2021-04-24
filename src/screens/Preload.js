import React, { Component } from 'react';
import { View, Image, ActivityIndicator, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Api from '../Api';

export default class Preload extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
        }

        this.checkToken = this.checkToken.bind(this);
    }

    async checkToken() {
        const token = await AsyncStorage.getItem('token');
        const user = await AsyncStorage.getItem('user');
        if(token) {
            let json = await Api.checkToken(token, user);
            if(json.token) {
                await AsyncStorage.setItem('token', json.token);
                                
                this.props.navigation.reset({
                    routes: [{name: 'Home'}]
                });
            } else {
                this.props.navigation.reset({
                    routes: [{name: 'SignIn'}]
                });
            }
        } else {
            this.props.navigation.reset({
                routes: [{name: 'SignIn'}]
            });
        }
    }

    componentDidMount() {
        this.checkToken();
    }

    render() {
        return (
            <View style={styles.background}>
                <Image style={styles.icon} source={require('../assets/Logo.jpeg')}/>
                <ActivityIndicator size="large" color="#000000" style={styles.loading}/>
            </View>
        );
    };
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
    },
    loading: {
        marginTop: 10
    },
    icon: {
        width: '35%',
        height: 140
    }
});