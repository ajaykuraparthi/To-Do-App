import React from 'react'

const Todo = ({ todo, onToggle, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = React.useState(false)
  const [editText, setEditText] = React.useState(todo.text)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (editText.trim()) {
      onEdit(todo.id, editText.trim())
      setIsEditing(false)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setEditText(todo.text)
      setIsEditing(false)
    }
  }

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div className="todo-content">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="todo-checkbox"
        />
        {isEditing ? (
          <form onSubmit={handleSubmit} className="edit-form">
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              onKeyDown={handleKeyDown}
              onBlur={handleSubmit}
              className="edit-input"
              autoFocus
            />
          </form>
        ) : (
          <span
            className="todo-text"
            onDoubleClick={() => setIsEditing(true)}
          >
            {todo.text}
          </span>
        )}
      </div>
      <div className="todo-actions">
        <button
          onClick={() => setIsEditing(true)}
          className="edit-btn"
          title="Edit todo"
        >
          ✏️
        </button>
        <button
          onClick={() => onDelete(todo.id)}
          className="delete-btn"
          title="Delete todo"
        >
          🗑️
        </button>
      </div>
    </div>
  )
}

export default Todo