import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { StackNavigator } from 'react-navigation'
import { Container, Header, Content, Button, Icon, Text } from 'native-base';

import store from './components/store'
import MainPage from './components/MainPage'
import ConfirmOrderScreen from './components/screens/ConfirmOrderScreen'
import PickUpLocationScreen from './components/screens/PickUpLocationScreen'
import CameraScreen from './components/OpenCamera'
const Apps = StackNavigator({
  Home: {
    screen: MainPage,
    navigationOptions: {
      header: null
    }
  },
  CameraScreen: {
    screen: CameraScreen,
    navigationOptions: {
      header: null
    }
  },
  ConfirmOrderScreen: {
    screen: ConfirmOrderScreen,
    navigationOptions: {
      header: null
    }
  },
  PickUpLocationScreen: {
    screen: PickUpLocationScreen,
    navigationOptions: {
      header: null
    }
  },
  
})

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Apps />
      </Provider>
    );
  }
}