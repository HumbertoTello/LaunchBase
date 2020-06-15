const aluno01 = {
  nome: 'Humberto',
  nota: 9.8
}

const aluno02 = {
  nome: 'Diego',
  nota: 10
}

const aluno03 = {
  nome: 'Fulano',
  nota: 2
}

// console.log - console é um objeto
// funcionalidade = método - log é um método

const media = (aluno01.nota + aluno02.nota + aluno03.nota) / 3 // acesso das propriedades via .

// array de objetos
const alunos = [
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

// array de strings
const nomesDeAlunos = ['Humberto', 'Diego', 'Fulano']

// alunos[x] armazena ainda um objeto, então é possível chamar sua propriedade via .
const media = (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3 