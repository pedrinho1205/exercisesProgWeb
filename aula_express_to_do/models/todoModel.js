// Simulando um banco de dados em memória
let todos = [];
let nextId = 1;

const getAll = () => {
  return todos;
};

const getById = (id) => {
  return todos.find(todo => todo.id === id);
};

const create = (title) => {
  const newTodo = {
    id: nextId++,
    title,
    completed: false
  };
  todos.push(newTodo);
  return newTodo;
};

const update = (id, updates) => {
  const todoIndex = todos.findIndex(todo => todo.id === id);
  if (todoIndex === -1) return null;

  // Atualiza apenas os campos permitidos e presentes
  const todo = todos[todoIndex];
  if (updates.title !== undefined) todo.title = updates.title;
  if (updates.completed !== undefined) todo.completed = updates.completed;
  
  return todo;
};

const remove = (id) => {
  const todoIndex = todos.findIndex(todo => todo.id === id);
  if (todoIndex === -1) return false;
  
  todos.splice(todoIndex, 1);
  return true;
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
};
