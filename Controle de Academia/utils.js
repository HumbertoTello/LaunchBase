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
  }
}

