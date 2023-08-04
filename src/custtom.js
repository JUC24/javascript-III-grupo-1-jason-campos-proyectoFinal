import './style/styles.css';

function sayHi() {
  console.log('Hello, World!');
}

sayHi();

document.addEventListener('DOMContentLoaded', function () {
  const urlParams = new URLSearchParams(window.location.search);
  const encodedContent = urlParams.get('contenido');
  const decodedContent = decodeURIComponent(encodedContent);
  const plantPreview = document.getElementById('recommendation');
  plantPreview.innerHTML = decodedContent;
});
