import React, { Component } from 'react';
import {connect} from 'react-redux'

import {
    View,
    FlatList,
    Text
} from 'react-native'

import CompletedItem from '../Components/done'
class CompletedList extends Component {
    render() {
        return (
            <FlatList
                data = {this.props.todos.filter((item)=>(item.isCompleted===true))}
                renderItem = {({item}) => <CompletedItem 
                                         key = {item.id}  
                                         text={item.text} />}
                keyExtractor={item => item.id}
            />
        );
    }
}
function mapStateToProps(state){
    return{todos:state.todos}
}

export default connect(mapStateToProps)(CompletedList);