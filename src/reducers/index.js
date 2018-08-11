
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
        case 'REMOVE_ITEM':
            return state.filter(todo => todo.id !== action.id);

        default:
            return state
    }
}
const completed = (state = [], action) => {
    switch (action.type) {
        case 'TASK_COMPLETED':
            console.log('Completed')
            console.log(state)
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