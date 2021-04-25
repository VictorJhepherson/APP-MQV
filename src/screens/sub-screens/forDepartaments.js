import React, { Component } from 'react';
import { View, Text, TextInput, ScrollView, ActivityIndicator, TouchableOpacity, StyleSheet, RefreshControl } from 'react-native';
import Search from '../../assets/search.svg';
import NotFound from '../../assets/nao-encontrado.svg';
import Plus from '../../assets/simbolo-de-mais-preto.svg';

export default class forYoungs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            departamentName: '',
            refreshing: false,
            loading: false,
            messageEmpty: 'flex',
            searchEmpty: 'none'
        };
    };

    render() {
        return (
            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-around', alignItems: 'center', backgroundColor: '#FFFFFF' }} horizontal={true}>
            <View style={styles.pageBody}>
                <Text style={{display: this.state.searchEmpty, color: '#000000', fontWeight: 'bold', marginBottom: 5}}>
                Digite a descrição de um Departamento!
                </Text>
                <View style={styles.areaInput}>
                    <View style={styles.inputArea}>
                        <TextInput 
                            style={styles.input} 
                            placeholder="Localiza aí!"
                            placeholderTextColor="#FFFFFF"
                            value={this.state.youngName}
                            onChangeText={(youngName)=>this.setState({ youngName })}
                        />
                        <TouchableOpacity style={styles.search}>
                            <Search width="24" height="24" fill="#FFFFFF" />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.plus} onPress={()=>{ this.props.navigation.navigate('InsertDepartaments') }}>
                        <Plus width="24" height="24" fill="#000000" />
                    </TouchableOpacity>
                </View>
                <ScrollView 
                    contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: '#FFFFFF' }} 
                    horizontal={false} 
                >
                    {this.state.loading && 
                        <ActivityIndicator size="large" color="#000000"/>
                    }
                    <View style={styles.listArea}>

                    </View>
                    <View style={[styles.messageNotFound, { display: this.state.messageEmpty }]}>
                        <NotFound width="60" height="60" fill="#FFFFFF" />
                        <Text style={{color: '#000000', fontWeight: 'bold', fontSize: 16, marginTop: 10}}>
                        Busca não encontrada
                        </Text>
                    </View>
                </ScrollView>
            </View>
        </ScrollView>
        );
    };
};

const styles = StyleSheet.create({
     pageBody: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#FFFFFF'
    },
    areaInput: {
        width: 400,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginBottom: 10
    },
    inputArea: {
        width: 300,
        height: 40,
        backgroundColor: '#000000',
        flexDirection: 'row',
        borderRadius: 10,
        paddingLeft: 15,
        alignItems: 'center'
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: '#FFFFFF',
        marginLeft: 5
    },
    plus: {
        width: 24,
        height: 24,
        marginRight: 10
    },
    search: {
        width: 24,
        height: 24,
        marginRight: 10
    },
    listArea: {
        width: 400,
    },
    messageNotFound: {
        width: 300,
        alignItems: 'center',
        justifyContent: 'center'
    }
});