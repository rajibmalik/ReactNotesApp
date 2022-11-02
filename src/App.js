import React, { useState, useRef, useEffect } from 'react'; // hooks built into React
import TodoList from './TodoList'
import { nanoid } from 'nanoid'

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  const [todos, setTodos] = useState([]) // Object de-structuring
  const todoNameRef = useRef()

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, []) // empty array so it will never recall this user effect

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))

  }, [todos]) // any time our array of todos changes, we want to save them



  const handleAddTodo = (e) => {
    const name = todoNameRef.current.value // name value is obtained using useRef status hook
    if (name === "") return 
    console.log(name)
    todoNameRef.current.value = null // resets the previous input value after clicking button
    setTodos(prevTodos => {
      return [...prevTodos, {id : nanoid(), name: name, complete: false}]
    })


  }

  return ( // JSX React's version of html
    <>
   <TodoList todos={todos} />   {/* 'todos' is a prop being passes the todos varibale in our use state */}
    <input ref={todoNameRef} type="text" />
    <button onClick={handleAddTodo}>Add a Todo</button>
    <button>Clear Completed Todos</button>
    <div>0 left to do</div>
    </>
  )
}

export default App;