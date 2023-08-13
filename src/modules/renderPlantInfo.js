import {
  plantNames,
  plantImage,
  potImage,
  extraImage,
  soilImage,
} from '../helpers/datas';

function renderRecommendation(plant) {
  const recommendationContainer = document.getElementById('recommendation');
  recommendationContainer.innerHTML = '';

  const cardInfo = document.createElement('div');
  cardInfo.className = 'recommended-card__info';
  recommendationContainer.appendChild(cardInfo);

  const title = document.createElement('h2');
  title.textContent = 'Plant Recommendation:';
  cardInfo.appendChild(title);

  const subtitle = document.createElement('h3');
  subtitle.textContent = plantNames(plant.name);
  cardInfo.appendChild(subtitle);

  const imageContainer = document.createElement('div');
  imageContainer.classList.add('image-container');

  const plantImg = document.createElement('img');
  plantImg.src = `./assets/${plantImage(plant.name)}.png`;
  plantImg.alt = plantNames(plant.name);
  imageContainer.appendChild(plantImg);

  if (plant.extras.length > 0) {
    for (const extra of plant.extras) {
      const extraImg = document.createElement('img');
      extraImg.src = `./assets/${extraImage(extra)}.png`;
      extraImg.alt = extra;
      imageContainer.appendChild(extraImg);
    }
  }

  if (plant.potStyle) {
    const potImg = document.createElement('img');
    potImg.src = `./assets/${potImage(plant.potMaterial, plant.potStyle)}.png`;
    potImage.alt = `${plant.potMaterial}`;
    imageContainer.appendChild(potImg);
  }

  const soilImg = document.createElement('img');
  soilImg.src = `assets/soil-${soilImage(plant.soil)}.png`;
  soilImg.alt = `Soil: ${plant.soil}`;
  imageContainer.appendChild(soilImg);

  cardInfo.appendChild(imageContainer);

  const information = document.createElement('div');
  information.classList.add('information');

  const plantInfo = document.createElement('p');
  plantInfo.textContent = `Name: ${plantNames(plant.name)}`;
  information.appendChild(plantInfo);

  const soilInfo = document.createElement('p');
  soilInfo.textContent = `Soil: ${plant.soil}`;
  information.appendChild(soilInfo);

  const potInfo = document.createElement('p');
  potInfo.textContent = `Pot Material: ${plant.potMaterial}`;
  information.appendChild(potInfo);

  const colorInfo = document.createElement('p');
  colorInfo.textContent = `Pot Color: ${plant.potColor}`;
  information.appendChild(colorInfo);

  if (plant.extras.length > 0) {
    const extrasInfo = document.createElement('p');
    extrasInfo.textContent = `Extras: ${plant.extras.join(', ')}`;
    information.appendChild(extrasInfo);
  }

  cardInfo.appendChild(information);

  const custumizeBtn = document.createElement('button');
  custumizeBtn.textContent = 'Custumize !';
  custumizeBtn.classList.add('custtomBtn');
  custumizeBtn.setAttribute('id', 'custtomBtn');
  cardInfo.appendChild(custumizeBtn);

  custumizeBtn.addEventListener('click', function () {
    const cardContent = recommendationContainer.innerHTML;
    const encodedContent = encodeURIComponent(cardContent);
    window.location.href = ('custom.html?contenido=', encodedContent);
  });
}

export default renderRecommendation;
