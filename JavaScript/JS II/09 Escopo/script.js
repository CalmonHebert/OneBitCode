let pokemon = 'Charmander';

function evoluir() {
   pokemon = 'Charmeleon';
}

console.log(pokemon);

function criarAnimal() {
   let animal = 'gato';
   return animal;
}

criarAnimal();
// console.log(animal); // Erro Animal nao foi definido devido o escopo da função
console.log(criarAnimal());

function avaliarNota(nota) {
   if (nota > 60) {
      var aprovado = true;
      let situacao = 'Aprovado';
   } else {
      var aprovado = false;
      let situacao = 'Reprovado';
   }
   console.log(nota);
   console.log(aprovado);
   console.log(situacao);
}

// avaliarNota(83)
// avaliarNota(49)

console.log(nome);
console.log(sobrenome);

var nome = 'Calmon'
var sobrenome = 'Hebert'

console.log(nome);
console.log(sobrenome);

