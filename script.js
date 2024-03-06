// Declaring
const player = {
  name: "Name",
  chips: 150
}
let cards = []
let sum
let isAlive = false
let hasBlackjack = false


// DOM
const chipsEl = document.querySelector("#chips-el")
const textEl = document.querySelector("#text-el")
const cardsEl = document.querySelector("#cards-el")
const sumEl = document.querySelector("#sum-el")
const btnNew = document.querySelector("#btn-new")
const btnDraw = document.querySelector("#btn-draw")


// Loading page
renderPlayer()


// Event listeners
btnNew.addEventListener("click", () => startGame())
btnDraw.addEventListener("click", () => drawCard())


// Functions
function renderPlayer() {
  chipsEl.textContent = `${player.name}: \$${player.chips}`
}

function startGame() {
  if (!isAlive || hasBlackjack) {
    isAlive = true
    hasBlackjack = false
    const firstCard = getRandomCard()
    const secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderResults()
  }
}

function getRandomCard() {
  const number = Math.floor(Math.random() * 13) + 1
  if (number > 10) {
    return 10
  } else if (number === 1) {
    return 11
  } else {
    return number
  }
}

function drawCard() {
  if (isAlive && !hasBlackjack) {
    const newCard = getRandomCard()
    cards.push(newCard)
    sum += newCard
    renderResults()
  }
}

function renderResults() {
  let shownCards = "Cards: "
  for (let i = 0; i < cards.length; i++) {
    shownCards += cards[i] + " "
  }
  cardsEl.textContent = shownCards
  sumEl.textContent = `Sum: ${sum}`
  renderText()
}

function renderText() {
  if (sum < 21) {
    textEl.textContent = "Draw another card?"
  } else if (sum === 21) {
    textEl.textContent = "BlackJack!!"
    hasBlackjack = true
  } else {
    textEl.textContent = "You are OUT!"
    isAlive = false
  }
}