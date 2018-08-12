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
                data = {this.props.completed}
                renderItem = {({item}) => <CompletedItem 
                                         key = {item.id}  
                                         text={item.text} />}
                keyExtractor={item => item.id}
            />
        );
    }
}
function mapStateToProps(state){
    return{completed:state.completed}
}

export default connect(mapStateToProps)(CompletedList);