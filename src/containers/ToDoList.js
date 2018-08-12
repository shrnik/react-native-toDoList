import React, { Component } from 'react';
import {connect} from 'react-redux'

import {taskCompleted, addToCompleted} from '../actions'
import {
    View,
    FlatList,
    Text
} from 'react-native'

import ToDoItem from '../Components/ToDo'
class ToDoList extends Component {
    render() {
        return (
            <FlatList
                data = {this.props.todos}
                renderItem = {({item}) => <ToDoItem 
                                         key = {item.id}  
                                         text={item.text} 
                                         onPress = {()=>{
                                             console.log('dispatching')
                                             this.props.dispatch(addToCompleted(item.text))
                                             this.props.dispatch(taskCompleted(item.id))
                                            ;
                                            }}/>}
                keyExtractor={item => item.id}
            />
        );
    }
}

//this.props.dispatch(taskCompleted(item.id,item.text))
//this.props.dispatch(taskCompleted(item.id));

function mapStateToProps(state){
    return{todos:state.todos}
}
// const mapDispatchToProps = dispatch => {
//     return {
//       taskCompleted: (id) => {
//         dispatch(taskCompleted(id))
//       }
//     };
//   };
export default connect(mapStateToProps)(ToDoList);