import { FaTrash, FaCheck } from 'react-icons/fa'
import { deleteTodo, updateTodo } from '../services/api'
import toast from 'react-hot-toast'

export default function TodoItem({ todo, onUpdate }) {
  const handleToggle = async () => {
    try {
      await updateTodo(todo._id, { completed: !todo.completed })
      toast.success('Todo updated!')
      onUpdate()
    } catch (error) {
      toast.error('Failed to update todo')
    }
  }

  const handleDelete = async () => {
    try {
      await deleteTodo(todo._id)
      toast.success('Todo deleted!')
      onUpdate()
    } catch (error) {
      toast.error('Failed to delete todo')
    }
  }

  return (
    <div className={`p-4 rounded-lg shadow ${todo.completed ? 'bg-green-50' : 'bg-white'}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <button
            onClick={handleToggle}
            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center 
              ${todo.completed ? 'bg-green-500 border-green-500 text-white' : 'border-gray-300'}`}
          >
            {todo.completed && <FaCheck className="w-3 h-3" />}
          </button>
          <span className={`${todo.completed ? 'line-through text-gray-500' : ''}`}>
            {todo.title}
          </span>
        </div>
        <button
          onClick={handleDelete}
          className="text-red-500 hover:text-red-700"
        >
          <FaTrash />
        </button>
      </div>
      {todo.description && (
        <p className="mt-2 text-sm text-gray-600 pl-8">{todo.description}</p>
      )}
    </div>
  )
}