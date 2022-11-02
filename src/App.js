import React, { useState, useRef } from 'react'; // uuse of useState hook built into React
import TodoList from './TodoList'

function App() {
  const [todos, setTodos] = useState([]) // Object de-structuring
  const todoNameRef = useRef()

  const handleAddTodo  = (e) => {
    const name =todoNameRef.current.values
    if (name === "") return 
    console.log(name)
    setTodos(prevTodos => {
      return [...prevTodos, {id: 1, name: name, complete: false}]
      })
    todoNameRef.current.value = null // This clears the input box each time the button is clicked

  }

  return (                               // Reacts version of html JSX 
    <>                           {/* Fragmentation allows us to put two html/JSX elements in a return*/}    
     <TodoList todos={todos} />  {/* 'todos' is a 'prop' being passed the 'todos' variable */}
     <input ref={todoNameRef} type="text"  />      {/* Usually cansnot put two html/JSX elements in a return */}  
     <button onClick={handleAddTodo}>Add A Todo</button>  
     <button>Clear Completed Todos</button>
     <div>0 left to do</div>
    </>       
  )
};

export default App;
