const form = document.querySelector('#signin');
const formSignin = document.querySelector('#signin__form');
const btnSignin = document.querySelector('#signin__btn');
const btnLogout = document.querySelector('#logout__btn');
const welcome = document.querySelector('#welcome');
const userId = document.querySelector('#user_id');

if (localStorage.getItem('id')) {
	signIn(localStorage.getItem('id'));
}

btnSignin.addEventListener('click', (event) => {
	event.preventDefault();
	let data = new FormData(formSignin);
	let xhr = new XMLHttpRequest();
	xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
	xhr.responseType = 'json';
	xhr.send(data);
	xhr.onload = () => {
		let response = xhr.response;
		if (response['success']) {
			let id = response['user_id']
			localStorage.setItem('userId', id);
			signIn(id);
		} else {
			alert('Неверный логин/пароль!')
		}
		formSignin.reset();
	}
})

function signIn(user) {
	form.classList.remove('signin_active');
	welcome.classList.add('welcome_active');
	userId.textContent = user;
}

btnLogout.addEventListener('click', () => {
	localStorage.clear();
	welcome.classList.remove('welcome_active');
	form.classList.add('signin_active');
})