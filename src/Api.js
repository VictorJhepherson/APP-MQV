import AsyncStorage from '@react-native-async-storage/async-storage';
const BASE_API = 'https://api-mqv.herokuapp.com';

export default {
    checkToken: async (token, user) => {
        const req = await fetch(`${BASE_API}/auth/refresh`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                "Authorization": 'Baerer ' + token
            },
            body: JSON.stringify({token, user})
        });
        const json = await req.json();
        return json;
    },
    signIn: async (SU_LOGINNAME, SU_PASSWORD) => {
        const req = await fetch(`${BASE_API}/auth/`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({SU_LOGINNAME, SU_PASSWORD})
        });
        const json = await req.json();

        return json;
    },
    signUp: async (SU_LOGINNAME, SU_PASSWORD) => {
        const req = await fetch(`${BASE_API}/auth/register`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({SU_LOGINNAME, SU_PASSWORD})
        });
        const json = await req.json();
        return json;
    },
    signOut: async () => {
        const token = await AsyncStorage.getItem('token');
        const req = await fetch(`${BASE_API}/auth/logout`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                "Authorization": 'Baerer ' + token
            },
            body: JSON.stringify({token})
        });
        const json = await req.json();

        return json;
    }
}