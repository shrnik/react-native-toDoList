
import { combineReducers } from 'redux'

const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            
            return [
                {
                    id: action.id,
                    text: action.text,
                    isCompleted: false
                },
            ...state
            ]
        case 'TASK_COMPLETED':
            console.log('removed')
            let newState = state.filter(todo => todo.id !== action.id);
            return newState
        default:
            return state
    }
}


const completed = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TO_COMPLETED':
            console.log('Completed')
            return [
                {
                    id: action.id,
                    text: action.text,
                },
            ...state
            ]
        default:
            return state
    }
  }

  

export default combineReducers({
    todos,completed})