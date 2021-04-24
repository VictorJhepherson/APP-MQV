import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/router';

export default class MQV extends Component {
  render() {
    return (
      <NavigationContainer>
        <Routes/>
      </NavigationContainer>
    );
  };
}