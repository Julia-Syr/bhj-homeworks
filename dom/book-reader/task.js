const book = document.querySelector('.book');
const controls = document.querySelector('.book__control');
const fontSize = document.querySelectorAll('.font-size');

for (let control of controls.children) {
    control.addEventListener('click', changeFont);
}

function changeFont(event) {
    event.preventDefault();
    fontSize.forEach(item => item.classList.remove('font-size_active'));
    if (event.target.dataset.size === 'big') {
        book.classList.add('book_fs-big');
        book.classList.remove('book_fs-small'); 
    } else if (event.target.dataset.size === 'small') {
        book.classList.add('book_fs-small'); 
        book.classList.remove('book_fs-big');
    } else {
        book.classList.remove('book_fs-small'); 
        book.classList.remove('book_fs-big');
    }
    event.target.classList.add('font-size_active');
}