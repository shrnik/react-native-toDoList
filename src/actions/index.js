let nextTodoId = 0
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
}
)

export const taskCompleted= (id,text) => ({
    type: 'TASK_COMPLETED',
    id,
    text
  })


