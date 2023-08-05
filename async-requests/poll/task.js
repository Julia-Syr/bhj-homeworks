const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.responseType = 'json';
xhr.onload = () => {
    let title = xhr.response.data.title;
    let answers = xhr.response.data.answers;
    pollTitle.textContent = title;
    for (let i = 0; i < answers.length; i++) {
        pollAnswers.innerHTML +=
            `<button class="poll__answer">
            ${answers[i]}
          </button>`  
    }
    const btn = document.querySelectorAll('.poll__answer')
    btn.forEach(elem => {
        elem.addEventListener('click', () => {
            alert('Спасибо, ваш голос засчитан!');
        })
    })
}
xhr.send();