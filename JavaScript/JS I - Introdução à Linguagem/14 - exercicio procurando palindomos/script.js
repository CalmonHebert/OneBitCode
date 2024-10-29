let nome = prompt('Digite uma palavra.');
let novaPalavra = '';

for (let i = 0; i < nome.length; i++) {
   console.log(nome[i]);

}
console.log('---');

for (let x = nome.length - 1; x >= 0; x--) {
   console.log(nome[x]);
   novaPalavra += nome[x]
}

console.log(novaPalavra);

if (nome == novaPalavra) {
   console.log('é palindromo');
} else {
   console.log('Não é palindromo');
}

