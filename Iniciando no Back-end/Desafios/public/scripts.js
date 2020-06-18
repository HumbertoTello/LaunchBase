const modal = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')
var courseId = ""

for (let card of cards) {
  card.addEventListener("click", function() {
    courseId = card.getAttribute("id")
    modal.classList.add("active")
    modal.querySelector("iframe").src=`https://rocketseat.com.br/${courseId}`
  })
}

document.querySelector(".close-modal").addEventListener("click", function() {
  modal.classList.remove("active")
  modal.querySelector("iframe").src=""
})

document.querySelector(".maximize-modal").addEventListener("click", function() {
  location.replace(`http://rocketseat.com.br/${courseId}`)
})