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
            <Text style = {{fontSize:25}}>To Do List</Text>
            <ToDoList/>
            <Text style = {{fontSize:25}}>Done</Text>
            <CompletedList/>
            </View>
        )
    }
}

export default Appn;