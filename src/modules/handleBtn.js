import processData from './dataProces';
import renderRecommendation from './renderPlantInfo';

function sendForm() {
  const recomendPlantForm = document.getElementById('myForm');
  const recommendationSection = document.getElementById('recommendation');

  recomendPlantForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const plantResult = processData();
    renderRecommendation(plantResult);

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
