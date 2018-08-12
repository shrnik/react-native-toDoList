import React,{Component} from 'react';
import { Platform,StyleSheet, Text, View } from 'react-native';
import Appn from './src/Components/App'

import { Provider } from 'react-redux'

import store from './store'

export default class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <Appn />
      </Provider>

    );
  }
}

console.disableYellowBox = true
