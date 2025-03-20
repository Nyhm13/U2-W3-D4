// attiviamo i pulsanti per le query delle immagini
const first = document.getElementById('first-button')
const second = document.getElementById('second-button')

// cerco di recuperare tutti i 9 cani delle cards
const allTheCards = document.querySelectorAll('.card')
const allTheDogs = document.querySelectorAll('.card img')
console.log('ALLTHEDOGS', allTheDogs)
const allTheEdits = document.querySelectorAll(
  '.card .btn-outline-secondary:nth-of-type(2)'
)
console.log('ALLTHEEDITS', allTheEdits)
const allThe9Mins = document.querySelectorAll('.card small')
console.log('ALLTHE9MINS', allThe9Mins)

allTheEdits.forEach((btn, i) => {
  btn.innerText = 'Hide'
  btn.addEventListener('click', function (e) {
    // allTheCards[i].classList.add('d-none')
    // CARD
    e.target.closest('.card').classList.add('d-none')
  })
})

const loadImages = function (query) {
  fetch('https://api.pexels.com/v1/search?query=' + query, {
    headers: {
      authorization: 'I4Rf3ZW27ACB7DOlwbOWnK3xNBVFRAD60hiVtMSdFEkxp1hCd9yH1tRg',
    },
  })
    .then((response) => {
      console.log('RESPONSE', response)
      if (response.ok) {
        return response.json()
      } else {
        throw new Error('errore nella chiamata pexels')
      }
    })
    .then((data) => {
      // DATA È UN OGGETTO con dentro un array "photos"
      console.log('DATA', data)
      allTheDogs.forEach((dogPic, i) => {
        dogPic.setAttribute('src', data.photos[i].src.medium)
      })
      allThe9Mins.forEach((small, i) => {
        small.innerText = data.photos[i].id
      })
    })
    .catch((err) => {
      console.log('ERRORE NELLA FETCH', err)
    })
}

first.addEventListener('click', function () {
  loadImages('mountains')
})

second.addEventListener('click', function () {
  loadImages('hamsters')
})

const customInput = document.getElementById('custom-input')
const customButton = document.getElementById('custom-button') // Search

customButton.addEventListener('click', function () {
  loadImages(customInput.value)
})

// prendo tutti i bottoni view
const allTheViewButtons = document.querySelectorAll(
  '.card .btn-outline-secondary:nth-of-type(1)'
)

allTheViewButtons.forEach((view) => {
  view.addEventListener('click', function (e) {
    console.log('CLICCATO')
    const modalPicture = document.querySelector('.modal img')
    modalPicture.src = e.target.closest('.card').querySelector('img').src
  })
})