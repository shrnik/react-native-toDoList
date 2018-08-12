import React, { Component } from 'react';
import {addTodo} from '../actions'
import {connect} from 'react-redux'
import {
    View,
    TextInput,
    ScrollView,
    StyleSheet
} from 'react-native'

import store from '../../store'

class Input extends Component{
    state={
        text:''
    }
    
    onChangeText=(value)=>{
        this.setState({
            text:value
        })
    }
    render(){
        const {dispatch} = this.props
        return (
            <TextInput 
                style = {styles.input}
                placeholder = 'Enter here'
                onChangeText = {val=>this.onChangeText(val)}
                onSubmitEditing = {e=>{
                    console.log(store.getState())
                    dispatch(addTodo(this.state.text));
                   ;
                }}
                />
        );
    }
}

const styles = StyleSheet.create({
    input:{
        backgroundColor:'grey',
        margin:10,
        paddingHorizontal:10,
        height:50
    },
})

export default connect()(Input)
