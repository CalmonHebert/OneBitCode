function calcularMedia(a, b) {
   const media = (a + b) / 2;
   return media;
}

const resultado = calcularMedia(7, 2);
console.log(resultado);

function criarProduto(nome, preco) {
   const produto = {
      nome,
      preco,
      estoque: 1,
   };

   return produto;
}

let notebook = criarProduto('Notebook Intel Core i3 8gb', 2500);
console.log(notebook);

function areaRetangular(base, altura) {
   return base * altura;
}

console.log(areaRetangular(3, 5));

function ola() {
   let texto = '...';
   return texto;
   texto = 'Olá mundo!'; // não acessivel, a função acaba quando o return é definido.
}

console.log(ola());

function maioridade(idade) {
   if (idade >= 18) {
      return console.log('Maior de idade');
   } else {
      return console.log('menor de idade');
   }
}

maioridade(20)
maioridade(10);
