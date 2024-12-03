// Calculadora Geométrica

// Escreva um programa em javascript para calcular a área de diferentes formas geométricas.O programa deve iniciar com um menu contendo as diferentes opções de cálculas.As opções devem ser:

// área do triângulo: base * altura / 2

// área do retângulo: base * altura

// área do quadrado: lado²

// área do trapézio: (base maior + base menor) * altura / 2

// área do círculo: pi * raio² (considere pi = 3.14)

// Você deve escrever o programa usando funções sempre que possível para separar os procedimentos.O programa também deve ter uma opção de “Sair” e enquanto ela não for escolhida deverá voltar ao menu.
function triangulo(base, altura) {
   const base = prompt('Informe a base do triângulo');
   const altura = prompt('Informe a altura do triângulo');
   return alert('área do triângulo: ' + base * altura / 2);
}

function retangulo(base, altura) {
   const base = prompt('Informe a base do retângulo');
   const altura = prompt('Informe a altura do retângulo');
   return alert('área do retângulo: ' + base * altura);
}

function quadrado(base, altura) {
   const lado = prompt('Informe o lado do quadrado');
   return alert('área do quadrado: ' + lado * lado);
}

function trapezio(baseMaior, baseMenor, altura) {
   const baseMaior = parseFloat(prompt('Informe a Base Maior do trapezio'));
   const baseMenor = parseFloat(prompt('Informe a Base Menor do trapezio'));
   const altura = prompt('Informe a altura do trapezio');
   return alert('área do trapezio: ' + (baseMaior + baseMenor) * altura / 2);
}

function circulo(raio) {
   const raio = prompt('Informe o raio do circulo');
   return alert('área do circulo: ' + 3.14 * (raio * raio));
}

function exibirMenu() {
   return prompt("Calculadora Geométrica\n" +
      "1. Calcular área de triângulo\n" +
      "2. Calcular área de retângulo\n" +
      "3. Calcular área de quadrado\n" +
      "4. Calcular área de trapézio\n" +
      "5. Calcular área de círculo\n" +
      "6. Sair\n")
}

function executar(){
   let opcao = '';
   do {

   }while(opcao != 6)
}


let operacao;

do {
   operacao = prompt('O que você quer calcular?' +
      '\n1 - área do triângulo. \n2 - área do retângulo. \n3 - área do quadrado. \n4 - área do trapézio. \n5 - área do círculo. \n6 - sair.'
   );
   switch (Number(operacao)) {
      case 1:
         function triangulo(base, altura) {
            return alert('área do triângulo: ' + base * altura / 2);
         }
         triangulo(prompt('base do triangulo'), prompt('altura do triangulo'));
         break;

      case 2:
         function retangulo(base, altura) {
            return alert('área do retangulo: ' + base * altura);
         }
         retangulo(prompt('base do retangulo'), prompt('altura do retangulo'));
         break;
      case 3:
         function quadrado(lado) {
            return alert('área do quadrado: ' + lado * lado);
         }
         quadrado(prompt('lado do quadrado'));
         break;
      case 4:
         function trapezio(baseMaior, baseMenor, alturaT) {
            return alert('área do trapezio: ' + (Number(baseMaior) + Number(baseMenor)) * alturaT / 2);
         }
         trapezio(prompt('Base Maior do trapézio'), prompt('Base menor do trapézio'), prompt('altura do trapézio'));
         break;
      case 5:
         function circulo(raio) {
            return alert(3.14 * (raio * raio));
         }
         circulo(prompt('Raio do circulo'));
         break;
      case 6:
         alert('Saindo...')
         break;
      default:
         alert('Escolha uma opçãp válida!')
         break;
   }

} while (Number(operacao) !== 6);
