import React, { useState} from 'react'; // hooks built into React
import TodoList from './TodoList'

function App() {
  const [todos, setTodos] = useState(['Todo 1']) // Object de-structuring
  return ( // JSX React's version of html
    <>
   <TodoList todos={todos} />   {/* 'todos' is a prop being passes the todos varibale in our use state */}
    <input type="text" />
    <button>Add a Todo</button>
    <button>Clear Completed Todos</button>
    <div>0 left to do</div>
    </>
  )
}

export default App;