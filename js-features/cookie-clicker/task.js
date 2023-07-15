const cookie = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');
cookie.onclick = function () {
    cookie.width = counter.textContent % 2 !== 0 ? 200 : 300;
    counter.textContent ++;
}
