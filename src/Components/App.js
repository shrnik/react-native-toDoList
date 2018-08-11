import React, { Component } from 'react';

import {View, Text , ScrollView, StyleSheet, TextInput} from 'react-native'

import Input from './Input'
import ToDoList from '../containers/ToDoList'


import CompletedList from '../containers/CompletedList';

class Appn extends Component {
    render() {
        return (
            <View>
            <Input/>
            <Text>To Do List</Text>
            <ToDoList/>
            <Text>Done</Text>
            <CompletedList/>
            </View>
        )
    }
}

export default Appn;