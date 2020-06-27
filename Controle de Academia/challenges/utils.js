module.exports = {
  age: function(timestamp) {
    const today = new Date()
    const birthDate = new Date(timestamp)

    let age = today.getFullYear() - birthDate.getFullYear()
    const month = today.getMonth() - birthDate.getMonth()

    if (month < 0 || month == 0 && today.getDate() < birthDate.getDate()) {
      age = age - 1
    }

    return age
  },
  date: function(timestamp) {
    const date = new Date(timestamp)

    const year = date.getUTCFullYear()
    const month = `0${date.getUTCMonth() + 1}`.slice(-2)
    const day = `0${date.getUTCDate()}`.slice(-2)

    return {
      day,
      month,
      year,
      iso: `${year}-${month}-${day}`,
      birthDay: `${day}/${month}`
    }
  },
  degreeShow: function(degree) {
    if (degree == "5") {
      return "5º ano"
    }
    if (degree == "6") {
      return "6º ano"
    }
    if (degree == "7") {
      return "7º ano"
    }
    if (degree == "8") {
      return "8º ano"
    }
    if (degree == "9") {
      return "9º ano"
    }
    if (degree == "1") {
      return "1º Ensino Médio"
    }
    if (degree == "2") {
      return "2º Ensino Médio"
    }
    if (degree == "3") {
      return "3º Ensino Médio"
    }
  }
}