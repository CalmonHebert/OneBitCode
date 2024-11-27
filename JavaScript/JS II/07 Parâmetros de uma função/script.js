function dobro(x) {
   console.log('O dobro de ' + x + ' é ' + (x * 2));
}

dobro(2);
dobro()// dá erro

function dizerOla(nome = 'Mundo') {
   console.log(`Olá ${nome}!`);
}

dizerOla('Calmon');
dizerOla();

function soma(a, b) {
   console.log(`O resultado da soma é ${a + b}`);
}

soma(7, 6);

function criarUsuario(nome, email, senha, tipo = 'admin') {
   const usuario = {
      nome,
      email,
      senha,
      tipo,
   }

   console.log(usuario);
}

function novoUsuario(nome, tipo = 'admin', email, senha) {
   const usuario = {
      nome,
      email,
      senha,
      tipo,
   }
   console.log(usuario);
}

criarUsuario('Calmon', 'calmondrummer@hotmail.com', '1234')
novoUsuario('Calmon', 'calmondrummer@hotmail.com', '1234')

function objetoComoParametro(usuario) {
   usuario.nome;
   usuario.email;
}

const dadosDoUsuario = {
   nome: 'Calmon',
   telefone: '75-9999',
   email: 'calmon@hotmail.com',
   senha: '1234',
   endereco: 'Rua portugal',
   aniversario: '17 de janeiro'
}


