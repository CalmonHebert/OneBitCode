function somar(a, b) {
   return a + b;
}

let operacao = somar;
console.log(somar(4, 5));

operacao = function (a, b) {
   return a - b;
}

console.log(operacao(4, 5));

// Funções anônimas só podem ser chamadas após a atribuição da variável,
// elas não são jogadas para o topo do arquivo como funções normais
olaMundo()
oiMundo()

function olaMundo() {
   console.log("Olá, mundo!")
}

const oiMundo = function () {
   console.log("Oi, mundo!")
}