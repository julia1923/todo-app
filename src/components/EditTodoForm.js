import React, { useState } from 'react'

export const EditTodoForm = ({editTodo, task}) => {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault(); //evita a página carregar ao enviar o formulário

    editTodo(value, task.id) //passando o 'estado' de TodoForm para TodoWrapper

    setValue(""); //limpa o input depois de submit
  }

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input
        type='text'
        className='todo-input'
        value={value}
        placeholder='Atualizar tarefa'
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        type='submit'
        className='todo-btn'>Atualizar Tarefa
      </button>
    </form>
  )
}

