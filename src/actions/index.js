let nextTodoId = 0;
let nextDoneId = 0;
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
}
)

export const taskCompleted= (text) => ({
    type: 'TASK_COMPLETED',
    id:nextDoneId++,
    text
  })


