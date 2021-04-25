import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Preload from './screens/Preload';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import Home from './screens/Home';
import InsertYoungs from './screens/InsertYoungs';
import DetailYoungs from './screens/DetailYoungs';
import InsertDepartaments from './screens/InsertDepartaments';

const Stack = createStackNavigator();

class Routes extends Component {
    render() {
        return(
            <Stack.Navigator
                initialRouteName="Preload"
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name="Preload" component={Preload} />
                <Stack.Screen name="SignIn" component={SignIn} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="InsertYoungs" component={InsertYoungs} />
                <Stack.Screen name="DetailYoungs" component={DetailYoungs} />
                <Stack.Screen name="InsertDepartaments" component={InsertDepartaments} />
            </Stack.Navigator>
        );
    }
};

export default Routes;