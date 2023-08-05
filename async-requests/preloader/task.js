let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.responseType = 'json';
xhr.onload = () => {
    let currentRate = xhr.response.response.Valute;
    for (let i in currentRate){
        document.querySelector('#items').innerHTML +=
		`<div class="item">
        <div class="item__code">${currentRate[i].CharCode}</div>
        <div class="item__value">${currentRate[i].Value}</div>
        <div class="item__currency">руб.</div>
        </div>`
    }
    document.querySelector('#loader').classList.remove('loader_active');
}
xhr.send()