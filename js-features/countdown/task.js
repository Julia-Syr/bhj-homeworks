const timerId = document.getElementById('timer');
let counter = timerId.textContent;
const countdown = setInterval (() => {
  counter --;
  timerId.textContent = counter;
  if (counter <= 0) {
    clearInterval(countdown);
    alert('Вы победили в конкурсе!');
}
}, 1000);
