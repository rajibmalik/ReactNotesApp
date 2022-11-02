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

  const toggleTodo = (id) => {
    const newTodos = [...todos] // should never directly modify the state variable, 
    const todo = newTodos.find(todo => todo.id ===  id)     
    todo.complete = !todo.complete
    setTodos(newTodos)                       //we want to copy it and use it to create the new state


  }

  const handleAddTodo = (e) => {
    const name = todoNameRef.current.value // name value is obtained using useRef status hook
    if (name === "") return 
    console.log(name)
    todoNameRef.current.value = null // resets the previous input value after clicking button
    setTodos(prevTodos => {
      return [...prevTodos, {id : nanoid(), name: name, complete: false}]
    })
  }

  const handleClearTodos = () => {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

  return ( // JSX React's version of html
    <>
   <TodoList todos={todos} toggleTodo={toggleTodo} />   {/* 'todos' is a prop being passes the todos varibale in our use state */}
    <input ref={todoNameRef} type="text" />
    <button onClick={handleAddTodo}>Add a Todo</button>
    <button onClick={handleClearTodos}>Clear Completed Todos</button>
    <div>{todos.filter(todo => !todo.complete).length}</div>
    </>
  )
}

export default App;