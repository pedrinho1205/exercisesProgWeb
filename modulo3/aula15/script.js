const formTarefas = document.getElementById("form-tarefas");
const inputNovaTarefa = document.getElementById("input-nova-tarefa");
const listaTarefas = document.getElementById("lista-tarefas");
const inputBusca = document.getElementById("input-busca");

let tarefas = JSON.parse(localStorage.getItem("minhasTarefas")) || [];

function renderizarTarefas(tarefasParaMostrar = tarefas) {
    listaTarefas.innerHTML = "";

    tarefasParaMostrar.forEach((tarefa, index) => {
        const li = document.createElement("li");

        li.dataset.index = index;

        if (tarefa.concluida) {
            li.classList.add("riscado");
        }

        li.innerHTML = `
      <span class="texto-tarefa">${tarefa.texto}</span>
      <button class="btn-excluir">X</button>
    `;

        listaTarefas.appendChild(li);
    });
}

formTarefas.addEventListener("submit", function (event) {
    event.preventDefault();

    const textoDaTarefa = inputNovaTarefa.value;

    tarefas.push({
        texto: textoDaTarefa,
        concluida: false
    });

    localStorage.setItem("minhasTarefas", JSON.stringify(tarefas));

    inputNovaTarefa.value = "";
    renderizarTarefas();
});


listaTarefas.addEventListener("click", function (event) {
    const elementoClicado = event.target;

    const liPai = elementoClicado.closest("li");
    if (!liPai) return;

    const index = liPai.dataset.index;

    if (elementoClicado.classList.contains("btn-excluir")) {
        tarefas.splice(index, 1);
    }

    else {
        tarefas[index].concluida = !tarefas[index].concluida;
    }

    localStorage.setItem("minhasTarefas", JSON.stringify(tarefas));
    renderizarTarefas();
});

inputBusca.addEventListener("input", function (event) {
    const termoBuscado = event.target.value.toLowerCase();

    const tarefasFiltradas = tarefas.filter(tarefa => {
        return tarefa.texto.toLowerCase().includes(termoBuscado);
    });

    renderizarTarefas(tarefasFiltradas);
});

renderizarTarefas();