const progress = document.getElementById('progress');
const formToSend = document.getElementById('form');

function loadProgress(event) {
  const loader = event.loaded / event.total;
  progress.value = loader;
}

formToSend.addEventListener('submit', (event) => {
  event.preventDefault();
  let xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
  xhr.upload.addEventListener('progress', loadProgress)
  let formData = new FormData(formToSend);
  xhr.send(formData);
})