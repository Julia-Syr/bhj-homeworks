const rotatorCase = document.querySelectorAll('.rotator__case');
let counter = 0;
setInterval(() => {
    rotatorCase.forEach((item) => {
        item.classList.remove('rotator__case_active');
    })
    rotatorCase[counter].classList.add('rotator__case_active');
    counter++;
    if (counter == rotatorCase.length) {
        counter = 0;
    }
}, 1000);