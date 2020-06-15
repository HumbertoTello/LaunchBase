const programadores = [
  {
    nome: 'Carlos',
    idade: 32,
    tecnologias: {
      nome: 'C++',
      especialidade: 'Desktop'
    }
  },
  {
    nome: 'Diego',
    idade: 24,
    tecnologias: {
      nome: 'Python',
      especialidade: 'Data Science'
    }
  },
  {
    nome: 'Humberto',
    idade: 22,
    tecnologias: {
      nome: 'JavaScript',
      especialidade: 'Web/Mobile'
    }
  }
]

console.log(`O usuário ${programadores[0].nome} tem ${programadores[0].idade} anos e usa a ${programadores[0].tecnologias.nome} com especialidade em ${programadores[0].tecnologias.especialidade}`)