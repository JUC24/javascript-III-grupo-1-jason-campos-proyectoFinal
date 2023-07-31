import processData from './dataProces';
import renderRecommendation from './renderPlantInfo';

function sendForm() {
  const recomendPlantForm = document.getElementById('myForm');
  const recommendationSection = document.getElementById('plantInfo');

  recomendPlantForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const plantResult = processData(); // Almacena el resultado de processData() en una variable
    renderRecommendation(plantResult); // Pasa el resultado de processData() a renderPlantInfo()

    recommendationSection.style.display = 'block';
  });
}

function clearForm() {
  const clearbtn = document.getElementById('clearForm');

  clearbtn.addEventListener('click', function () {
    document.getElementById('myForm').reset();

    const recommendationSection = document.getElementById('recommendation');
    recommendationSection.style.display = 'none';
  });
}

export { sendForm, clearForm };
