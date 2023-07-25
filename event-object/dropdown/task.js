const dropdownList = document.querySelector('.dropdown__list');
const dropdownValue = document.querySelector('.dropdown__value');
const dropdownItem = document.querySelectorAll('.dropdown__item');
function showMenu (event) {
    dropdownList.classList.toggle('dropdown__list_active');
    dropdownItem.forEach(item => {
      item.onclick = (event) => {
        event.preventDefault();
        dropdownValue.textContent = item.textContent;
        dropdownList.classList.toggle('dropdown__list_active');
    } 
})
}
dropdownValue.addEventListener("click", showMenu)