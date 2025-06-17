import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {

    const [value, setValue] = useState("");

    const handleSubmit = e => {
      e.preventDefault(); //evita a página carregar ao enviar o formulário

      addTodo(value) //passando o 'estado' de TodoForm para TodoWrapper

      setValue(""); //limpa o input depois de submit
    }

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
    <input type='text' className='todo-input' value={value} 
    placeholder='Qual é a tarefa de hoje?' onChange={(e) => setValue(e.target.value)}/>
    <button type='submit' className='todo-btn'>Adicionar Tarefa</button>
    </form>
  )
}
