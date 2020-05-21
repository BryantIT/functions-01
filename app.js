const startGameBtn = document.getElementById('start-game-btn');

function startGame() {
  console.log('Game is starting!')
}

const person = {
  name: 'Bryant',
  greet: function greet() {
    console.log('Hello!')
  }
}

person.greet()

startGameBtn.addEventListener('click', startGame)
