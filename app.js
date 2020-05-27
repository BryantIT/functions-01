const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK'
const PAPER = 'PAPER'
const SCISSORS = 'SCISSORS'
const DEFAULT_USER_CHOICE = ROCK
const RESULT_DRAW = 'DRAW'
const RESULT_PLAYER_WINS = 'PLAYER_WINS'
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS'
let gameIsRunning  = false

const getPlayerChoice = () => {
  const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}`, '').toUpperCase()
  if (
    selection !== ROCK &&
    selection !== PAPER &&
    selection !== SCISSORS
  ) {
    alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`)
    return
  }
  return selection
}

const getComputerChoice = () => {
  const randomValue = Math.random()
  if (randomValue < 0.34) {
    return ROCK
  } else if (randomValue < 0.67) {
    return PAPER
  } else {
    return SCISSORS
  }
}

const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) => {
  if (cChoice === pChoice) {
    return RESULT_DRAW
  } else if (
    cChoice === ROCK && pChoice === PAPER ||
    cChoice === PAPER && pChoice === SCISSORS ||
    cChoice === SCISSORS && pChoice === ROCK
  ) {
    return RESULT_PLAYER_WINS
  } else {
    return RESULT_COMPUTER_WINS
  }
}

startGameBtn.addEventListener('click', () => {
  if (gameIsRunning) {
    return
  }
  gameIsRunning = true
  console.log('Game is starting!')
  const playerSelection = getPlayerChoice()
  const computerSelection = getComputerChoice()
  let winner
  if (playerSelection) {
    winner = getWinner(playerSelection, computerSelection)
  } else {
    winner = getWinner(computerSelection)
  }
  let message = `You picked ${playerSelection || DEFAULT_USER_CHOICE}, computer picked ${computerSelection} therefore you `
  if (winner === RESULT_DRAW) {
    message = message + 'had a draw.'
  } else if (winner === RESULT_PLAYER_WINS) {
    message = message + 'won.'
  } else {
    message = message + 'lost.'
  }
  alert(message)
  gameIsRunning = false
})

// not related to game

const sumUp = (...numbers) => {
  let sum = 0
  for (const num of numbers) {
    sum += num
  }
  return sum
}

const subtractUp = function() {
  let sum = 0
  for (const num of arguments) { // don't use this, use rest operator
    sum -= num
  }
  return sum
}
console.log(sumUp(1, 5, 10, -3, 6, 10))
console.log(sumUp(1, 5, 10, -3, 6, 10, 22, 5, 8, 9, 45))
console.log(subtractUp(1, 5, 10, -3, 6, 10, 22, 5, 8, 9, 45))
