id="timer"
let seconds = parseInt(document.getElementById('timer').textContent);

const countdown = setInterval(() => {
  if (seconds > 0) {
    seconds--;
    document.getElementById('timer').textContent = seconds;
  } else {
    clearInterval(countdown);
    alert("Вы победили в конкурсе!");
  }
}, 1000);
