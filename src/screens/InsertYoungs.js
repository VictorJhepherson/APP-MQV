import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Animated, TextInput, StyleSheet } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import MQV from '../assets/Logo.svg';
import Back from '../assets/nav_prev.svg';

import Email from '../assets/email.svg';
import Person from '../assets/person.svg';
import Whats from '../assets/telefone-celular.svg';
import Doc from '../assets/pasta-de-documentos.svg';
import Schedule from '../assets/today.svg';
import Instagram from '../assets/instagram.svg';

export default class InsertYoungs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            mail: '',
            date: '',
            phone: '',
            instagram: '',
            genre: ''
        };
    };

    render() {
        return (
            <View style={styles.background}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={()=>{ this.props.navigation.navigate('Home') }}>
                        <Back width="40" height="40" fill="#000000"/>
                    </TouchableOpacity>
                    <Text style={styles.title}>MQV</Text>
                    <MQV width="46" height="46" style={styles.icon}/>
                </View>
                <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
                    <View style={styles.titleArea}>
                        <Text style={styles.subtitle}>Cadastre o Jovem</Text>
                    </View>
                    <View style={styles.inputArea}>
                        <Person width="24" height="24" fill="#9B111E" />
                        <TextInput 
                            style={styles.input} 
                            placeholder="Nome"
                            placeholderTextColor="#000000"
                            value={this.state.name}
                            autoCapitalize='none'
                            onChangeText={(name)=>{ this.setState({ name }) }} 
                        />
                    </View>
                    <View style={styles.inputArea}>
                        <Email width="24" height="24" fill="#9B111E" />
                        <TextInput 
                            style={styles.input} 
                            placeholder="Email"
                            placeholderTextColor="#000000"
                            value={this.state.mail}
                            autoCapitalize='none'
                            onChangeText={(mail)=>{ this.setState({ mail }) }} 
                        />
                    </View>
                    <View style={styles.inputArea}>
                        <Schedule width="24" height="24" fill="#9B111E" />
                        <TextInputMask
                            type={'datetime'}
                            options={{
                                format: 'DD/MM/YYYY'
                            }}
                            placeholder="Data de nascimento"
                            placeholderTextColor="#000000"
                            value={this.state.date}
                            style={styles.TextMasked}
                            onChangeText={(date)=>{ this.setState({ date }) }}
                        />
                    </View>
                    <View style={styles.inputArea}>
                        <Whats width="24" height="24" fill="#9B111E" />
                        <TextInputMask
                            type={'cel-phone'}
                            options={{
                                maskType: 'BRL',
                                withDDD: true,
                                dddMask: '(99)'
                            }}
                            placeholder="WhatsApp"
                            placeholderTextColor="#000000"
                            style={styles.TextMasked}
                            value={this.state.phone}
                            onChangeText={(phone)=>{ this.setState({ phone }) }}
                        />
                    </View>
                    <View style={styles.inputArea}>
                        <Whats width="24" height="24" fill="#9B111E" />
                        <TextInput 
                            style={styles.input} 
                            placeholder="Instagram"
                            placeholderTextColor="#000000"
                            value={this.state.instagram}
                            autoCapitalize='none'
                            onChangeText={(instagram)=>{ this.setState({ instagram }) }} 
                        />
                    </View>
                    <View style={styles.inputArea}>
                        <Email width="24" height="24" fill="#9B111E" />
                        <TextInput 
                            style={styles.input} 
                            placeholder="Digite seu nome"
                            placeholderTextColor="#000000"
                            value={this.state.name}
                            autoCapitalize='none'
                            onChangeText={(name)=>{ this.setState({ name }) }} 
                        />
                    </View>
                    <View style={styles.inputArea}>
                        <Email width="24" height="24" fill="#9B111E" />
                        <TextInput 
                            style={styles.input} 
                            placeholder="Digite seu nome"
                            placeholderTextColor="#000000"
                            value={this.state.name}
                            autoCapitalize='none'
                            onChangeText={(name)=>{ this.setState({ name }) }} 
                        />
                    </View>
                    <View style={styles.inputArea}>
                        <Email width="24" height="24" fill="#9B111E" />
                        <TextInput 
                            style={styles.input} 
                            placeholder="Digite seu nome"
                            placeholderTextColor="#000000"
                            value={this.state.name}
                            autoCapitalize='none'
                            onChangeText={(name)=>{ this.setState({ name }) }} 
                        />
                    </View>
                    <View style={styles.inputArea}>
                        <Email width="24" height="24" fill="#9B111E" />
                        <TextInput 
                            style={styles.input} 
                            placeholder="Digite seu nome"
                            placeholderTextColor="#000000"
                            value={this.state.name}
                            autoCapitalize='none'
                            onChangeText={(name)=>{ this.setState({ name }) }} 
                        />
                    </View>
                </ScrollView>
            </View>
        );
    };
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
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
    },
    pageBody: {
        height: 400,
        width: 400,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    inputArea: {
        width: 350,
        height: 50,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        borderRadius: 10,
        paddingLeft: 15,
        alignItems: 'center',
        borderWidth: 3,
        borderColor: '#000000',
        margin: 3
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: '#000000',
        marginLeft: 5
    },
    TextMasked: {
        flex: 1,
        fontSize: 16,
        color: "#000000",
        marginLeft: 5
    },
    titleArea: {
        width: 350,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center'
    },
    subtitle: {
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold'
    }
});