/*
OPERADORES DE COMPARAÇÃO

  >     Maior
  <     Menor
  >=    Maior ou igual
  <=    Menor ou igual
  ==    Igual a
  ===   Igual e do mesmo tipo
  !=    Diferente
  !==   Diferente, inclusive do tipo

*/

// boolean 
// pode ser true ou false

console.log('Operadores maior e menor')
console.log(5 > 4) // true
console.log(5 < 4) // false
console.log(5 >= 4) // true
console.log(5 >= 4) // true
console.log(4 <= 4) // true

console.log('Operadores de igualdade')
console.log(4 == "4") // true - olha só o valor
console.log(4 === "4") // false - olha o valor e o tipo (number / string)
console.log(4 != "5") // true - valor diferente
console.log(4 !== "5") // true - valor e tipo diferente

console.log('Desafio 1')
const idade = 17
// modularizar
// verificar se a pessoa é maior igual 18 anos
console.log(idade >= 18)

// se sim deixar entrar, senão, bloqueia a entrada
if(idade>= 18) {
  console.log('Deixar entrar')
} else {
  console.log('Bloquear entrada')
}

// se tiver 17
// avisar para voltar quando tiver 18 anos
if (idade === 17) {
  console.log('Volte quando tiver 18')
}

/*
OPERADORES LÓGICOS

  &&  "E": Duas condições devem ser verdadeiras

  ||  "OU": Pelo menos uma condição deve ser verdadeira

  !   "Negação": Nega uma condição

*/
console.log('')
console.log('&&')
console.log(5 == 5 && 6 == 6) // true
console.log(5 == 5 && 6 != 6) // false

console.log('||')
console.log(5 == 5 && 6 == 6) // true
console.log(5 == 5 && 6 != 6) // true - primeira condição verdadeira

console.log('Negação')
console.log(!(5>6)) // true - (negação(false)) = true
console.log(!(5<6)) // false - (negação(true)) = false

// Desafio 1 - Outra abordagem
if(!(idade >= 18) || idade === 17) { // false || false = false (precisa ser menor de 18 ou ter 17 para ser bloqueado)
  console.log('Bloquear entrada')
} else {
  console.log('Deixar entrar')
}

/*
OPERADORES ARITMÉTICOS

  *   Multiplicação
  /   Divisão
  %   Resto da divisão
  +   Adição
  -   Subtração

*/

console.log('')
console.log('Operadores aritméticos')
console.log(2 * 2) // 4
console.log(2 / 2) // 1
console.log(2 % 1.5) // 0.5
console.log(2 + 2) // 4
console.log(2 - 2) // 0