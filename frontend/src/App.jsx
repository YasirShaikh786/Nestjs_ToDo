import { useState, useEffect } from 'react'
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'
import Header from './components/Header'
import { Toaster } from 'react-hot-toast'
import { getTodos } from './services/api'

function App() {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchTodos()
  }, [])

  const fetchTodos = async () => {
    try {
      const { data } = await getTodos()
      setTodos(data)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto py-8 px-4">
        <AddTodo onAdd={fetchTodos} />
        {loading ? (
          <div className="text-center py-8">Loading...</div>
        ) : (
          <TodoList todos={todos} onUpdate={fetchTodos} />
        )}
      </main>
      <Toaster />
    </div>
  )
}

export default App