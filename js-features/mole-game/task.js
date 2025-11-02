const deadSpan = document.getElementById('dead');
const lostSpan = document.getElementById('lost');

let deadCount = 0;
let lostCount = 0;
let gameInterval = null; 

function getHole(index) {
  return document.getElementById(`hole${index}`);
}

function showMole() {
  for (let i = 1; i <= 9; i++) {
    getHole(i).classList.remove('hole_has-mole');
  }

  const randomIndex = Math.floor(Math.random() * 9) + 1;
  const hole = getHole(randomIndex);
  hole.classList.add('hole_has-mole');
}

function handleHoleClick(event) {
  if (event.target.classList.contains('hole_has-mole')) {
    // Попадание
    deadCount++;
    deadSpan.textContent = deadCount;
    event.target.classList.remove('hole_has-mole');
  } else {
    lostCount++;
    lostSpan.textContent = lostCount;
  }

  if (deadCount >= 10) {
    alert('Поздравляем! Вы победили!');
    resetGame();
  } else if (lostCount >= 5) {
    alert('Игра окончена! Вы промахнулись 5 раз.');
    resetGame();
  }
}

function resetGame() {
  clearInterval(gameInterval);
  deadCount = 0;
  lostCount = 0;
  deadSpan.textContent = deadCount;
  lostSpan.textContent = lostCount;

  for (let i = 1; i <= 9; i++) {
    getHole(i).classList.remove('hole_has-mole');
  }
}

function startGame() {
  showMole(); 
  gameInterval = setInterval(showMole, 1500);
}

for (let i = 1; i <= 9; i++) {
  getHole(i).addEventListener('click', handleHoleClick);
}

startGame();
