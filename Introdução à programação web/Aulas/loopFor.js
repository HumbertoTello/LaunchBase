// Criar um programa que calcula a média
// das turmas de alunos e envia
// mensagem do cálculo das médias

const alunosDaTurmaA = [
  {
    nome: 'Humberto',
    nota: 9.8
  },
  {
    nome: 'Diego',
    nota: 10
  },
  {
    nome: 'Fulano',
    nota: 2
  }
]

const alunosDaTurmaB = [
  {
    nome: 'Cleiton',
    nota: 10
  },
  {
    nome: 'Robson',
    nota: 5
  },
  {
    nome: 'Siclano',
    nota: 2
  },
  {
    nome: 'Beltrano',
    nota: 2
  }
]

function calculaMedia(alunos) { // alunos sera o objeto
  let soma = 0
  for (let i = 0; i < alunos.length; i++) { // let permite mudar a variável // .length conta o número de objetos no array // i++ incremento
    soma = soma + alunos[i].nota
  }

  const media = soma / alunos.length
  console.log(media)
  return media
}

const media1 = calculaMedia(alunosDaTurmaA) // o parâmetro é um objeto
const media2 = calculaMedia(alunosDaTurmaB)

function enviaMensagem(media, turma) { // media = number e turma = string
  if (media > 5) { // media > 5 = true
    console.log(`A média da turma ${turma} foi de ${media}. Parabéns!`)
  } else {
    console.log(`A média da turma ${turma} é menor que 5`)
  }
}

enviaMensagem(media1, 'turmaA')
enviaMensagem(media2, 'turmaB')