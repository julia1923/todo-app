import React, {useState} from 'react'
import { TodoForm } from './TodoForm'
import { v4 as uuidv4 } from 'uuid';
import { Todo } from './Todo';
import { EditTodoForm } from './EditTodoForm';
uuidv4();

export const TodoWrapper = () => {

  const [todos, setTodos] = useState([]); // Array para armazenamento de tarefas 

  const addTodo = todo => { // Função para a criação da tarefa 
    setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}])

    console.log(todos)
  }

  const taskCompleted = id => { // Função para marcar a tarefa como completa
    setTodos(todos.map(
    todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
  }

  const deleteTodo = id => { // Função para deletar a tarefa
    setTodos(todos.filter(todo => todo.id !== id))

  }

  const editTodo = id => {
    setTodos(todos.map(todo => todo.id === id ? {
      ...todo, isEditing: !todo.isEditing} : todo))
  }

  const editTask = (task, id) => {
    setTodos(todos.map(todo => todo.id === id ? {
      ...todo, task, isEditing: !todo.isEditing} : todo
    ))
  }

  return (
    <div className='TodoWrapper'>
      <h1>Concretize suas tarefas!</h1>
        <TodoForm addTodo={addTodo}></TodoForm>

        {todos.map((todo, index) => (
          todo.isEditing ? (
            <EditTodoForm editTodo={editTask} task={todo}></EditTodoForm>
          ) : (
          <Todo task={todo} key={index}
          taskCompleted={taskCompleted} deleteTodo={deleteTodo} editTodo={editTodo}
          />
          )
        ))}

    </div>
  )
}
