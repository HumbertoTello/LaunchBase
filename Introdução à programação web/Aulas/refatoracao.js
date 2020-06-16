const classA = [
  {
    name: 'Humberto',
    grade: 9.8
  },
  {
    name: 'Diego',
    grade: 10
  },
  {
    name: 'Fulano',
    grade: 2
  }
]

const classB = [
  {
    name: 'Cleiton',
    grade: 10
  },
  {
    name: 'Robson',
    grade: 5
  },
  {
    name: 'Siclano',
    grade: 2
  },
  {
    name: 'Beltrano',
    grade: 2
  }
]

function calculateAverage(students) {
  let sum = 0

  for (let i = 0; i < students.length; i++) {
    sum = sum + students[i].grade
  }

  const average = sum / students.length
  
  return average 
}

function sendMessage(average, turma) {
  if (average > 5) {
    console.log(`${turma} average: ${average}. Congratulations!`)
  } else {
    console.log(`${turma} average: ${average}. It's not good.`)
  }
}

function markAsFlunked(student) {
  student.flunked = false

  if (student.grade < 5) {
    student.flunked = true
  }
}

function sendFlunkedMessage(student) {
  if (student.flunked) {
    console.log(`The student ${student.name} is flunked!`)
  }
}

function studentsflunkeds(students) {
  for (student of students) { 
    markAsFlunked(student)
    sendFlunkedMessage(student)
  }
}

const average1 = calculateAverage(classA) 
const average2 = calculateAverage(classB)

sendMessage(average1, 'classA')
sendMessage(average2, 'classB')

studentsflunkeds(classA)
studentsflunkeds(classB)
