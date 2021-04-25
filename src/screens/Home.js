import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeTabBar from '../components/HomeTabBar';
import MQV from '../assets/Logo.svg';

import forYoungs from './sub-screens/forYoungs';
import forDepartaments from './sub-screens/forDepartaments';
import forAnalytics from './sub-screens/forAnalytics';

const Tab = createMaterialTopTabNavigator();
export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <View style={styles.background}>
                <View style={styles.header}>
                    <MQV width="46" height="46" style={styles.icon}/>
                    <Text style={styles.title}>MQV</Text>
                    <MQV width="46" height="46" style={styles.icon}/>
                </View>
                <Tab.Navigator tabBar={props=><HomeTabBar {...props} />}>
                    <Tab.Screen name="forYoungs" component={forYoungs}/>
                    <Tab.Screen name="forDepartaments" component={forDepartaments}/>
                    <Tab.Screen name="forAnalytics" component={forAnalytics}/>
                </Tab.Navigator>
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
    header: {
        height: 130,
        width: 415,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginBottom: 10,
        paddingTop: 60,
        backgroundColor: '#9B111E'
    },
    title: {
        fontSize: 24,
        color: '#000',
        fontWeight: 'bold'
    },
    icon: {
        width: 36,
        height: 36,
    }
});