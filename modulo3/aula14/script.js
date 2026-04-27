// 1. Array com 5 produtos iniciais
const produtos = [
    { nome: "Notebook", preco: 4500, categoria: "Eletrônicos" },
    { nome: "Camiseta", preco: 80, categoria: "Vestuário" },
    { nome: "Smartphone", preco: 2500, categoria: "Eletrônicos" },
    { nome: "Livro de JS", preco: 120, categoria: "Livros" },
    { nome: "Fone Bluetooth", preco: 300, categoria: "Eletrônicos" }
];

const container = document.getElementById("container");
const btnFiltro = document.getElementById("btn-filtro");
const btnLimpar = document.getElementById("btn-limpar");

function criarCard(produto) {
    const card = document.createElement("div");
    card.classList.add("card");

    card.dataset.categoria = produto.categoria;

    card.innerHTML = `
    <h3>${produto.nome}</h3>
    <p>Preço: R$ ${produto.preco.toFixed(2).replace('.', ',')}</p>
    <p>Categoria: <strong>${produto.categoria}</strong></p>
  `;

    container.appendChild(card);
}

produtos.forEach(produto => {
    criarCard(produto);
});

btnFiltro.addEventListener("click", () => {
    const todosOsCards = document.querySelectorAll(".card");

    todosOsCards.forEach(card => {
        if (card.dataset.categoria !== "Eletrônicos") {
            card.classList.toggle("oculto");
        }
    });
});

btnLimpar.addEventListener("click", () => {
    container.innerHTML = "";
});

const btnAdicionar = document.getElementById("btn-adicionar");
const inputNome = document.getElementById("input-nome");
const inputPreco = document.getElementById("input-preco");
const inputCategoria = document.getElementById("input-categoria");

btnAdicionar.addEventListener("click", () => {
    const novoProduto = {
        nome: inputNome.value,
        preco: Number(inputPreco.value),
        categoria: inputCategoria.value
    };

    criarCard(novoProduto);

    inputNome.value = "";
    inputPreco.value = "";
    inputCategoria.value = "";
});