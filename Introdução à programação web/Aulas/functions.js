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
    nota: 10
  },
  {
    nome: 'Siclano',
    nota: 2
  }
]

function calculaMedia(alunos) { // alunos sera o objeto
  return (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3 // retorna para uma constante
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