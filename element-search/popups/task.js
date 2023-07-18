const modalElement = document.getElementById('modal_main')
modalElement.classList.add ('modal_active');
const modalClosed = document.querySelectorAll('.modal__close_times');
modalClosed.forEach ((elem) =>
  elem.onclick = function () {
    modalElement.classList.remove ('modal_active');
    modalSuccess.classList.remove ('modal_active');
})
const modalSuccess = document.getElementById('modal_success');
const buttonDanger = document.querySelector('.btn_danger');
buttonDanger.onclick = function () {
    modalSuccess.classList.add ('modal_active');
}