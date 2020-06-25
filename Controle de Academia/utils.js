module.exports = {
  age: function(timestamp) {
    const today = new Date() // object
    const birthDate = new Date(timestamp) // created_at
  
    let age = today.getFullYear() - birthDate.getFullYear() // catch the whole year
    const month = today.getMonth() - birthDate.getMonth()
  
    if (month < 0 || month == 0 && today.getDate() < birthDate.getDate()) {
      age = age - 1
    }
  
    return age
  },
  date: function(timestamp) {
    const date = new Date(timestamp)

    // yyyy
    const year = date.getUTCFullYear() // UTC == universal time

    // mm (0 to 11)
    const month = `0${date.getUTCMonth() + 1}`.slice(-2)

    // dd (1 to 31)
    const day = `0${date.getUTCDate()}`.slice(-2)

    return `${year}-${month}-${day}`
  }
}

