import React from 'react'
import Todo from './Todo'

export default function TodoList({ todos }) { // We are passing in the todos list variable from App.js
  return (
    todos.map(todo => {
      return <Todo key={todo.id} todo={todo} /> // We are passing in the todo variable from Todo.js which we are importing
                                             // We only want React to render the Todos that change so we give it key
                                             // the todo id is going to be unique, we need the key to be unique
                       
    })
  )
}



