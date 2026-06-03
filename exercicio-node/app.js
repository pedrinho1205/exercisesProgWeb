const fs = require('fs');
const http = require('http');
const utils = require('./utils');

// Usa as funções exportadas do utils.js
const resultadoSoma = utils.soma(5, 10);
const resultadoSubtracao = utils.subtracao(10, 3);

const textoResultado = `Resultado da soma: ${resultadoSoma}\nResultado da subtração: ${resultadoSubtracao}\n`;

// Salva os resultados em um arquivo txt usando o módulo fs
fs.writeFileSync('resultado.txt', textoResultado);
console.log('Resultados salvos em resultado.txt');

// Cria um servidor HTTP simples na porta 3000
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <title>Exercício Node.js</title>
      <style>
        body { font-family: sans-serif; text-align: center; margin-top: 50px; }
        h1 { color: #333; }
        p { color: #666; font-size: 1.2rem; }
      </style>
    </head>
    <body>
      <h1>Servidor Node.js Rodando!</h1>
      <p>Verifique o terminal para as saídas e confira o arquivo <strong>resultado.txt</strong></p>
    </body>
    </html>
  `);
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
