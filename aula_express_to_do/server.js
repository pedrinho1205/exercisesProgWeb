const express = require('express');
const path = require('path');
const logger = require('./middlewares/logger');
const todoRoutes = require('./routes/todoRoutes');

const app = express();
const PORT = 3000;

// Middlewares
app.use(logger); // Middleware customizado de log
app.use(express.json()); // Parser de JSON no body da requisição

// Servir arquivos estáticos da pasta public (Front-end)
app.use(express.static(path.join(__dirname, 'public')));

// Rotas da API
app.use('/api/todos', todoRoutes);

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  console.log(`Acesse: http://localhost:${PORT}`);
});
