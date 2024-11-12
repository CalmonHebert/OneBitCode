const imoveis = []
let opcao = ''

do {
  opcao = prompt('Bem-vindo(a) ao cadastro de Imóveis\n Total de imoveis: ' + imoveis.length + '\n\nEscolha uma opção:\n1- Novo imovel \n2- Lista imoveis \n3- Sair')

  switch (opcao) {
    case '1':
      const imovel = {}
      imovel.proprietario = prompt('Informe o nome do proprietario do imóvel:')
      imovel.quartos = prompt('Quantos Quartos possui o imóvel?')
      imovel.banheiros = prompt('Quantos Banheiros  possui o imóvel?')
      imovel.garagem = prompt('O imóvel Possui Garagem? Sim/Não')

      const confirmacao = confirm(
        'Salvar este imóvel?\n' +
        '\nProprietário: ' + imovel.proprietario +
        '\nQuartos: ' + imovel.quartos +
        '\nBanheiros: ' + imovel.banheiros +
        '\nPossui garagem? ' + imovel.garagem
      )

      if (confirmacao) {
        imoveis.push(imovel)
      }

      break
    case '2':
      for (let i = 0; i < imoveis.length; i++) {
        alert('Imóvel ' + (i + 1) +
          '\nProprietário: ' + imoveis[i].proprietario +
          '\nQuartos: ' + imoveis[i].quartos +
          '\nBanheiros ' + imoveis[i].banheiros +
          '\nPossui garagem? ' + imoveis[i].garagem
        )
      }
      break
    case '3':
      alert('Encerrando...')
      break
    default:
      alert('Escolha uma opção valida')
  }
} while (opcao != 3);

console.log(imoveis);



