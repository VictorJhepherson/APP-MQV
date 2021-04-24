import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, Animated, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Api from '../Api';
import Email from '../assets/email.svg';
import Lock from '../assets/lock.svg';

export default class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loginname: '',
            password: '',
            validateEmpty: 'none',
            messageEmpty: 'none',
            offset: new Animated.ValueXY({ x: 0, y: 150 })
        };

        this.wait = this.wait.bind(this);
        this.setMessage = this.setMessage.bind(this);
        this.validatePass = this.validatePass.bind(this);
        this.SignUp = this.SignUp.bind(this);
    }

    wait(timeout) {
        return new Promise(resolve => setTimeout(resolve, timeout));
    };
    
    setMessage() {
        this.setState({ validateEmpty: 'none' });
        this.setState({ messageEmpty: 'none' });
    };

    validatePass() {
        if(this.state.password.length < 6 || this.state.password.length > 10)
            return false;

        return true;
    };

    async SignUp() {
        if(this.state.loginname != '' && this.state.password != '') {
            let result = this.validatePass();
            if(result) {
                let json = await Api.signUp(this.state.loginname, this.state.password);
                if(json.token) {
                    let signIn = await Api.signIn(this.state.loginname, this.state.password);
                    if(signIn.token)  {
                        await AsyncStorage.setItem('token', signIn.token);
                        await AsyncStorage.setItem('user', signIn.data.SU_ID.toString());

                        this.props.navigation.reset({
                            routes: [{name: 'Home'}]
                        });
                    }
                } else {
                    alert("Erro: " + json.error);
                }
            } else {
                this.setState({ validateEmpty: 'flex' });
                this.wait(3000).then(this.setMessage());
            }
        } else {
            this.setState({ messageEmpty: 'flex' });
            this.wait(3000).then(this.setMessage());
        }
    };

    componentDidMount() {
        Animated.spring(this.state.offset.y, {
            toValue: 0,
            speed: 10,
            bounciness: 20,
            useNativeDriver: true
        }).start();
    };

    render() {
        return (
            <View style={styles.background}>
                <View style={styles.headerBody}>
                    <Image style={styles.icon} source={require('../assets/Logo.jpeg')}/>
                    <Text style={styles.title}>MQV</Text>
                </View>
                <Animated.View style={[ styles.pageBody, { transform: [ { translateY: this.state.offset.y } ] }]}>
                    <View style={styles.titleArea}>
                        <Text style={styles.subtitle}>Insira suas informações para o cadastro</Text>
                    </View>
                    <View style={styles.inputArea}>
                        <Email width="24" height="24" fill="#9B111E" />
                        <TextInput 
                            style={styles.input} 
                            placeholder="Digite seu username"
                            placeholderTextColor="#000000"
                            value={this.state.loginname}
                            autoCapitalize='none'
                            onChangeText={(loginname)=>{ this.setState({ loginname }) }} 
                        />
                    </View>
                    <View style={styles.inputArea}>
                        <Lock width="24" height="24" fill="#9B111E" />
                        <TextInput
                            style={styles.input} 
                            placeholder="Digite sua senha"
                            placeholderTextColor="#000000"
                            value={this.state.password}
                            autoCapitalize='none'
                            onChangeText={(password)=>{ this.setState({ password }) }}
                            secureTextEntry={true}
                        />
                    </View>
                    <View style={styles.wrongPassword}>
                        <Text style={{display: this.state.validateEmpty, color: '#FF0000'}}>
                        A senha deve conter de 6 a 10 caracteres!
                        </Text>
                        <Text style={{display: this.state.messageEmpty, color: '#FF0000', }}>
                        Preencha os campos!
                        </Text>
                    </View>
                    <TouchableOpacity style={styles.loginButton} onPress={()=>{ this.SignUp() }}>
                        <Text style={styles.loginText}>Cadastrar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{ this.props.navigation.navigate('SignIn') }} style={styles.registerButton}>
                        <Text style={styles.registerText}>Já possui uma conta?</Text>
                        <Text style={styles.registerTextBold}>Entre</Text>
                    </TouchableOpacity>
                </Animated.View>
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
    headerBody: {
        height: 250,
        width: 400,
        alignItems: 'center',
        justifyContent: 'space-around',
        marginBottom: 10
    },
    title: {
        fontSize: 24,
        color: '#000',
        fontWeight: 'bold'
    },
    icon: {
        width: '35%',
        height: 140,
    },
    pageBody: {
        height: 400,
        width: 400,
        alignItems: 'center',
        justifyContent: 'space-around'
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
        borderColor: '#000000'
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: '#000000',
        marginLeft: 5
    },
    wrongPassword: {
        width: 350,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginButton: {
        height: 50,
        width: 350,
        backgroundColor: '#9B111E',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginText: {
        fontSize: 18,
        color: '#000000',
        fontWeight: 'bold'
    },
    registerButton: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    registerText: {
        fontSize: 16,
        color: '#000000'
    },
    registerTextBold: {
        fontSize: 16,
        color: '#000000',
        fontWeight: 'bold',
        marginLeft: 5
    }
});