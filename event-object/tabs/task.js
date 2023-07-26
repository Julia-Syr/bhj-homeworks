const tabs = Array.from(document.querySelectorAll('.tab'));
const tabContent = document.querySelectorAll('.tab__content');
tabs.forEach((item) => {
    item.addEventListener('click', () => {
        tabs.forEach(item => item.classList.remove('tab_active'));
        tabContent.forEach(item => item.classList.remove('tab__content_active'));
        const indexItem = tabs.indexOf(item);
        item.classList.toggle('tab_active');
        tabContent[indexItem].classList.add('tab__content_active');
   })
})