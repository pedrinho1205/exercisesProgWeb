const API_URL = '/api/todos';

const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

// Carrega as tarefas ao iniciar
document.addEventListener('DOMContentLoaded', fetchTodos);

// Adiciona uma nova tarefa
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const title = input.value.trim();
  if (!title) return;

  try {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title })
    });
    if (res.ok) {
      input.value = '';
      fetchTodos();
    }
  } catch (error) {
    console.error('Erro ao adicionar tarefa:', error);
  }
});

// Busca as tarefas da API
async function fetchTodos() {
  try {
    const res = await fetch(API_URL);
    const todos = await res.json();
    renderTodos(todos);
  } catch (error) {
    console.error('Erro ao buscar tarefas:', error);
  }
}

// Renderiza as tarefas na tela
function renderTodos(todos) {
  list.innerHTML = '';
  todos.forEach(todo => {
    const li = document.createElement('li');
    if (todo.completed) li.classList.add('completed');

    const span = document.createElement('span');
    span.textContent = todo.title;

    const divActions = document.createElement('div');
    divActions.classList.add('actions');

    const btnToggle = document.createElement('button');
    btnToggle.textContent = '✔';
    btnToggle.classList.add('btn-toggle');
    btnToggle.onclick = () => toggleTodo(todo.id, !todo.completed);

    const btnDelete = document.createElement('button');
    btnDelete.textContent = '🗑';
    btnDelete.classList.add('btn-delete');
    btnDelete.onclick = () => deleteTodo(todo.id);

    divActions.appendChild(btnToggle);
    divActions.appendChild(btnDelete);
    
    li.appendChild(span);
    li.appendChild(divActions);
    list.appendChild(li);
  });
}

// Alterna o status da tarefa
async function toggleTodo(id, completed) {
  try {
    const res = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ completed })
    });
    if (res.ok) fetchTodos();
  } catch (error) {
    console.error('Erro ao atualizar tarefa:', error);
  }
}

// Deleta a tarefa
async function deleteTodo(id) {
  try {
    const res = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE'
    });
    if (res.ok) fetchTodos();
  } catch (error) {
    console.error('Erro ao deletar tarefa:', error);
  }
}
