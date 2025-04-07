/* <button id="value">Mudar Valor</button>
<button id="type">Mudar Tipo</button>
<button id="placeholder">Mudar Placeholder</button>
<button id="disable">Desabilitar/Habilitar</button>
<button id="data">Mostrar Dados</button> */

const input = document.getElementById('input')

document.getElementById('value').addEventListener('click', function () {
  input.value = 'Olá mundo';
})

document.getElementById('type').addEventListener('click', function () {
  input.type = input.type !== 'radio' ? 'radio' : 'text'
})

document.getElementById('placeholder').addEventListener('click', function () {
  input.placeholder = 'Digite algo...'
})

document.getElementById('disable').addEventListener('click', function () {
  input.setAttribute('disabled', !input.disabled)
})

document.getElementById('data').addEventListener('click', function () {
  const data = input.dataset.somethingElse
  console.log('O valor do atributo something é: ' + data);
  input.dataset.somethingElse = 'Algum outro valor'
  console.log('O valor do atributo something é: ' + input.dataset.somethingElse);
})