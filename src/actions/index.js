
import uuid from 'uuid/v1'

export const addTodo = text => ({
  type: 'ADD_TODO',
  id: uuid(),
  text
}
)


export const taskCompleted = (id) => ({
    type: 'TASK_COMPLETED',
    id
  })


  export const addToCompleted= text => ({
    type: 'ADD_TO_COMPLETED',
    id:uuid(),
    text
  })