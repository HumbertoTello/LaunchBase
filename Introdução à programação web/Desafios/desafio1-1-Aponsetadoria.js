const nome = 'Silvana'
const sexo = 'F'
const idade = 61
const contribuicao = 29

if (sexo == 'M') {
  if (contribuicao >= 35) {
    if ((idade + contribuicao) >= 95) {
      console.log(`${nome}, você pode se aposentar!`)
    }
  } else {
    console.log(`${nome}, você ainda não pode se aposentar!`)
  }
} else {
  if (contribuicao >= 30) {
    if ((idade + contribuicao) >= 90) {
      console.log(`${nome}, você pode se aposentar!`)
    }
  } else {
    console.log(`${nome}, você ainda não pode se aposentar!`)
  }
}