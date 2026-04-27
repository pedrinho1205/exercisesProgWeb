const alunos = [
    { nome: "Amanda", nota1: 8.0, nota2: 7.5 },
    { nome: "Bruno", nota1: 5.0, nota2: 4.5 },
    { nome: "Camila", nota1: 9.0, nota2: 9.5 },
    { nome: "Daniel", nota1: 6.0, nota2: 5.0 },
    { nome: "Eduardo", nota1: 3.0, nota2: 4.0 }
];

function calcularMedia(n1, n2) {
    return (n1 + n2) / 2;
}

const alunosComMedia = alunos.map(aluno => {
    return {
        nome: aluno.nome,
        nota1: aluno.nota1,
        nota2: aluno.nota2,

        media: calcularMedia(aluno.nota1, aluno.nota2)
    };
});

const aprovados = alunosComMedia.filter(aluno => aluno.media >= 6);

const reprovados = alunosComMedia.filter(aluno => aluno.media < 6);

const somaTotal = alunosComMedia.reduce((acumulador, aluno) => {
    return acumulador + aluno.media;
}, 0);

const mediaGeral = somaTotal / alunosComMedia.length;

const alunosOrdenados = [...alunosComMedia].sort((a, b) => b.media - a.media);

console.log(`--- RELATÓRIO DA TURMA ---`);
console.log(`Média geral da turma: ${mediaGeral.toFixed(2)}`);

console.log(`\n--- ALUNOS APROVADOS ---`);
aprovados.forEach(aluno => {
    console.log(`✅ ${aluno.nome} - Média: ${aluno.media}`);
});

console.log(`\n--- ALUNOS REPROVADOS ---`);
reprovados.forEach(aluno => {
    console.log(`${aluno.nome} - Média: ${aluno.media}`);
});

console.log(`\n--- RANKING (DESAFIO EXTRA) ---`);
alunosOrdenados.forEach((aluno, index) => {
    console.log(`${index + 1}º Lugar: ${aluno.nome} (Média: ${aluno.media})`);
});