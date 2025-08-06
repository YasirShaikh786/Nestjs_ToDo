import TodoItem from './TodoItem'

export default function TodoList({ todos, onUpdate }) {
  return (
    <div className="mt-6 space-y-4">
      {todos.length === 0 ? (
        <p className="text-center text-gray-500">No todos yet. Add one above!</p>
      ) : (
        todos.map(todo => (
          <TodoItem key={todo._id} todo={todo} onUpdate={onUpdate} />
        ))
      )}
    </div>
  )
}