import React, { Component } from 'react';
import {connect} from 'react-redux'

import {taskCompleted, removeItem} from '../actions'
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
                data = {this.props.todos.filter((item)=>(item.isCompleted===false))}
                renderItem = {({item}) => <ToDoItem 
                                         key = {item.id}  
                                         text={item.text} 
                                         onPress = {()=>{
                                             this.props.dispatch(taskCompleted(item.text));
                                             this.props.dispatch(removeItem(item.id));
                                            }}
                                        />
                            }
                keyExtractor={item => item.id}
            />
        );
    }
}

//this.props.dispatch(taskCompleted(item.id,item.text))

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