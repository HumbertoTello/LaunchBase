// Criar programa que calcula a média
// das notas entre os alunos e envia
// mensagem de cálculo da média

// template string
// const nome3 = `Isabela e nome ${nome}` // template string `Texto ${variavel}`

// typeof
// console.log(typeof notaAluno01) // para saber o tipo da variável

// condicionais
// if (true/false) {
//   // faz algo
// } else (true/false) {
//   // faz algo
// }

const aluno01 = 'Humberto' // variável do tipo string
const notaAluno01 = 1.8 // variável do tipo number

const aluno02 = "Diego" // aspas duplas ou simples para tipo string
const notaAluno02 = 10

const aluno03 = 'Fulano'
const notaAluno03 = 2

// calculo da media
const media = (notaAluno01 + notaAluno02 + notaAluno03) / 3

// Se a média for maior que 5, parabenizar a turma
if (media > 5) { // media > 5 = true
  console.log(`A média foi de ${media}. Parabéns!`)
} else {
  console.log('A média é menor que 5')
}