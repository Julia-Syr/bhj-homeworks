const editor = document.querySelector('#editor');
editor.value = localStorage.getItem('text');

editor.addEventListener('input', () => {
    localStorage.setItem('text', editor.value);
});

const card = document.querySelector('.card');
const clearButton = document.createElement('button');
clearButton.textContent = 'Очистить содержимое';
card.appendChild(clearButton);

clearButton.onclick = () => {
    editor.value = '';
    localStorage.removeItem('text');
};