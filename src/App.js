import React, { useState, useEffect } from 'react'
import Todo from './components/Todo'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')
  const [filter, setFilter] = useState('all') // 'all', 'active', 'completed'

  // Load todos from localStorage on component mount
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos')
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos))
    }
  }, [])

  // Save todos to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = (e) => {
    e.preventDefault()
    if (input.trim()) {
      const newTodo = {
        id: Date.now(),
        text: input.trim(),
        completed: false,
        createdAt: new Date().toISOString()
      }
      setTodos([newTodo, ...todos])
      setInput('')
    }
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const editTodo = (id, newText) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: newText } : todo
    ))
  }

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed))
  }

  const toggleAll = () => {
    const allCompleted = todos.every(todo => todo.completed)
    setTodos(todos.map(todo => ({ ...todo, completed: !allCompleted })))
  }

  const filteredTodos = todos.filter(todo => {
    switch (filter) {
      case 'active':
        return !todo.completed
      case 'completed':
        return todo.completed
      default:
        return true
    }
  })

  const activeTodosCount = todos.filter(todo => !todo.completed).length
  const completedTodosCount = todos.filter(todo => todo.completed).length

  return (
    <div className="app">
      <div className="todo-container">
        <header className="todo-header">
          <h1>📝 Todo List</h1>
          <p className="subtitle">Stay organized and productive</p>
        </header>

        <form onSubmit={addTodo} className="add-todo-form">
          <div className="input-group">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="What needs to be done?"
              className="todo-input"
            />
            <button type="submit" className="add-btn">
              Add Todo
            </button>
          </div>
        </form>

        {todos.length > 0 && (
          <div className="todo-controls">
            <div className="bulk-actions">
              <button
                onClick={toggleAll}
                className="toggle-all-btn"
                title={todos.every(todo => todo.completed) ? 'Mark all incomplete' : 'Mark all complete'}
              >
                {todos.every(todo => todo.completed) ? '☐' : '☑'}
              </button>
              <span className="todo-count">
                {activeTodosCount} of {todos.length} remaining
              </span>
            </div>

            <div className="filter-buttons">
              <button
                onClick={() => setFilter('all')}
                className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              >
                All ({todos.length})
              </button>
              <button
                onClick={() => setFilter('active')}
                className={`filter-btn ${filter === 'active' ? 'active' : ''}`}
              >
                Active ({activeTodosCount})
              </button>
              <button
                onClick={() => setFilter('completed')}
                className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
              >
                Completed ({completedTodosCount})
              </button>
            </div>

            {completedTodosCount > 0 && (
              <button onClick={clearCompleted} className="clear-completed-btn">
                Clear Completed
              </button>
            )}
          </div>
        )}

        <div className="todo-list">
          {filteredTodos.length === 0 ? (
            <div className="empty-state">
              {todos.length === 0 ? (
                <div>
                  <p>🎯 No todos yet!</p>
                  <p>Add your first todo above to get started.</p>
                </div>
              ) : (
                <div>
                  <p>✨ All done!</p>
                  <p>No {filter} todos to show.</p>
                </div>
              )}
            </div>
          ) : (
            filteredTodos.map(todo => (
              <Todo
                key={todo.id}
                todo={todo}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
                onEdit={editTodo}
              />
            ))
          )}
        </div>

        {todos.length > 0 && (
          <footer className="todo-footer">
            <div className="stats">
              <span>Total: {todos.length}</span>
              <span>Active: {activeTodosCount}</span>
              <span>Completed: {completedTodosCount}</span>
            </div>
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${todos.length > 0 ? (completedTodosCount / todos.length) * 100 : 0}%` }}
              ></div>
            </div>
          </footer>
        )}
      </div>
    </div>
  )
}

export default App
