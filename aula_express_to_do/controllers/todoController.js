const Todo = require('../models/todoModel');

// GET /api/todos
const getAllTodos = (req, res) => {
  const todos = Todo.getAll();
  res.json(todos);
};

// GET /api/todos/:id
const getTodoById = (req, res) => {
  const id = parseInt(req.params.id);
  const todo = Todo.getById(id);
  if (!todo) {
    return res.status(404).json({ error: 'Tarefa não encontrada' });
  }
  res.json(todo);
};

// POST /api/todos
const createTodo = (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ error: 'O título é obrigatório' });
  }
  const newTodo = Todo.create(title);
  res.status(201).json(newTodo);
};

// PUT /api/todos/:id
const updateTodo = (req, res) => {
  const id = parseInt(req.params.id);
  const updates = req.body;
  
  const updatedTodo = Todo.update(id, updates);
  if (!updatedTodo) {
    return res.status(404).json({ error: 'Tarefa não encontrada' });
  }
  res.json(updatedTodo);
};

// DELETE /api/todos/:id
const deleteTodo = (req, res) => {
  const id = parseInt(req.params.id);
  const success = Todo.remove(id);
  if (!success) {
    return res.status(404).json({ error: 'Tarefa não encontrada' });
  }
  res.status(204).send(); // 204 No Content
};

module.exports = {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo
};
