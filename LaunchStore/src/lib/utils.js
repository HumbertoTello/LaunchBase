module.exports = {
  date(timestamp) {
    const date = new Date(timestamp)

    // yyyy
    const year = date.getUTCFullYear() // UTC == universal time

    // mm (0 to 11)
    const month = `0${date.getUTCMonth() + 1}`.slice(-2)

    // dd (1 to 31)
    const day = `0${date.getUTCDate()}`.slice(-2)

    const hour = date.getHours()
    const minutes = date.getMinutes()

    return {
      day,
      month,
      year,
      hour,
      minutes,
      iso: `${year}-${month}-${day}`,
      birthDay: `${day}/${month}`,
      format: `${day}/${month}/${year}`
    } 
  },
  formatPrice(price) {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    }).format(price/100)
  }
}

