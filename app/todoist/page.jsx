'use client'

import { useState } from 'react'

const TodoistPage = () => {
  const [text, setText] = useState('')
  const [todos, setTodos] = useState([])

  const handleAddTodo = () => {
    console.log('Adding todo:', text)
    if (text.trim() !== '') {
      setTodos([...todos, text])
      setText('')
    }
  }

  const handleTextChange = (e) => {
    setText(e.target.value)
  }

  const handleCompleteTodo = (e, index) => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  const keys = ['tod', '2pm']
  // todo: highlight the text in the input box if it matches any of the keys in the array
  const handleKeyDown = (e) => {
    if (keys.includes(e.key)) {
      e.preventDefault()
      setText(e.key)
    } else if (e.key === 'Enter') {
      handleAddTodo()
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-4">Todoist Page</h1>
      <div>
        <div className="flex gap-2">
          <input
            className="border-2 border-amber-50 rounded-2xl p-2"
            type="text"
            value={text}
            onChange={handleTextChange}
            placeholder="Enter a todo"
            onKeyDown={handleKeyDown}
          />
          <button
            className="bg-green-400 rounded-2xl py-1 px-2"
            onClick={handleAddTodo}
          >
            Add todo
          </button>
        </div>
        <div className="text-center pt-5">
          <p className="text-2xl pt-5">Todos</p>
          <ul className="list-disc list-inside pt-5">
            {todos.length === 0 && (
              <p className="text-gray-500">No todos yet!</p>
            )}

            {todos.map((todo, index) => (
              <li
                className="hover:line-through cursor-pointer"
                onClick={handleCompleteTodo(index)}
                key={index}
              >
                {todo}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TodoistPage
