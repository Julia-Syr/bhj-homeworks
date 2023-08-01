const chatWidget = document.querySelector('.chat-widget');
chatWidget.addEventListener('click', () => {
 chatWidget.classList.add('chat-widget_active');
});

function setTime() {
    let currentDate = new Date();
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    hours = (hours < 10) ? '0' + hours : hours;
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    return hours + ':' + minutes;
}

const messages = document.querySelector('.chat-widget__messages');
const inputWidget = document.getElementById('chat-widget__input');
const botMessages = ["Добрый день, мы еще на завтраке, извините.", "Вы ко мне обращаетесь?", "Мы ничего не будем вам продавать!", "Можете не оставлять свой никому ненужный отзыв!", "К сожалению, все операторы сейчас заняты. Можете больше не писать"];
let botMessagesRandom = function (e) {
    return Math.floor(Math.random() * e.length);
 }

document.addEventListener("keydown", event => {
    if(event.code === 'Enter' && inputWidget.value.trim() !== "") {
    messages.innerHTML += '<div class="message message_client"><div class = "message__time">' + setTime() + '</div><div class = "message__text">' + inputWidget.value + '</div></div>';
    inputWidget.value = '';
    messages.innerHTML += '<div class="message"><div class="message__time">' + setTime() + '</div><div class="message__text">' + botMessages[botMessagesRandom(botMessages)] + '</div></div>';
    }
})