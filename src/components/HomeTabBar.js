import React, { Component } from 'react';
import { View, ScrollView, TouchableOpacity, Text, StyleSheet } from 'react-native'

export default class HomeTabBar extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };

        this.toGo = this.toGo.bind(this);
    };

    toGo(screenName) {
        this.props.navigation.navigate(screenName);
    };

    render() {
        return (
            <View style={styles.container}>
            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-around', alignItems: 'center', backgroundColor: '#FFFFFF' }} horizontal={true}>
                <TouchableOpacity style={styles.buttonPage} onPress={()=>this.toGo('forYoungs')}>
                    <Text style={[styles.textPage, {opacity: this.props.index===0 ? 1 : 0.5}]}>Jovens</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonPage} onPress={()=>this.toGo('forDepartaments')}>
                    <Text style={[styles.textPage, {opacity: this.props.index===1 ? 1 : 0.5}]}>Departamentos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonPage} onPress={()=>this.toGo('forAnalytics')}>
                    <Text style={[styles.textPage, {opacity: this.props.index===2 ? 1 : 0.5}]}>Analytics</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: 400,
        height: 60,
        justifyContent: 'space-around', 
        alignItems: 'center',
        flexDirection: 'row'
    },
    buttonPage: {
        borderBottomWidth: 3,
        borderColor: '#000000',
        borderRadius: 10,
        width: 120,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 5
    },
    textPage: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#000'
    }
});