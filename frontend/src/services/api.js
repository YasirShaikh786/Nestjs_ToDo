import axios from 'axios'

const API_URL = 'http://localhost:3000/todos' // Update if your backend runs on different port

export const getTodos = async () => {
  return axios.get(API_URL)
}

export const createTodo = async (todo) => {
  return axios.post(API_URL, todo)
}

export const updateTodo = async (id, updates) => {
  return axios.patch(`${API_URL}/${id}`, updates)
}

export const deleteTodo = async (id) => {
  return axios.delete(`${API_URL}/${id}`)
}