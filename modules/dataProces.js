import PlantBuilder from './builder.js';
import { getPlantImage, getExtraImage } from './datas.js';

function processData() {
  const plantForm = document.getElementById('myForm');

  const plantPlacement = plantForm.querySelector(
    'input[name="plantPlacement"]:checked',
  ).value;

  const receiveSunlight = plantForm.querySelector(
    'input[name="receiveSunlinght"]:checked',
  ).value;

  const havePets = plantForm.querySelector(
    'input[name="havePets"]:checked',
  ).value;

  const waterQuantity = plantForm.querySelector(
    'input[name="waterQuantity"]:checked',
  ).value;

  const style = plantForm.querySelector('input[name="style"]:checked').value;

  const extra = Array.from(
    plantForm.querySelectorAll('input[name="extras"]:checked'),
  ).map((input) => input.value);

  const plantBuilder = new PlantBuilder();
  let plantName;

  switch (plantPlacement) {
    case 'insideIndirect':
      plantBuilder.withName('Low Light Plants');
      break;
    case 'insideLotIndirect':
      plantBuilder.withName('Medium Light Plants');
      break;
    case 'outside':
      plantBuilder.withName('Outdoor Plants');
      break;
  }

  switch (receiveSunlight) {
    case 'yes':
      plantBuilder.withSoil('Composted Soil');
      break;
    case 'no':
      plantBuilder.withSoil('Fertilized Soil');
      break;
  }

  switch (havePets) {
    case 'yes':
      plantBuilder.setPotMaterial('Non-Toxic Plant');
      break;
    case 'no':
      plantBuilder.setPotMaterial('Toxic Plant');
      break;
  }

  switch (waterQuantity) {
    case 'overwater':
      plantName += plantName.includes('Toxic')
        ? '(Low Light)'
        : '(Medium Light)';
      plantBuilder
        .setPotMaterial('Clay')
        .withSoil('Drainage Soil')
        .PlantImage(getPlantImage(plantName));
      break;
    case 'underwater':
    case 'notKnow':
      plantBuilder.setPotMaterial('Ceramic');
      break;
  }

  switch (style) {
    case 'minimalism':
      plantBuilder.setPotStyle('Simple');
      break;
    case 'someDecoration':
      plantBuilder.setPotStyle('Simple').setPotStyle('decorated');
      break;
    case 'lotsDecoration':
      plantBuilder.setPotStyle('Painted').setPotStyle('decorated');
      break;
  }

  switch (plantBuilder.buildInfo.name) {
    case 'Low Light Plants':
      plantName =
        waterQuantity === 'overwater'
          ? 'Toxic Plant (Low Light)'
          : 'Non-Toxic Plant (Low Light)';
      break;
    case 'Medium Light Plants':
      plantName =
        waterQuantity === 'overwater'
          ? 'Toxic Plant (Medium Light)'
          : 'Non-Toxic Plant (Medium Light)';
      break;
    case 'Outdoor Plants':
      plantName =
        havePets === 'no'
          ? 'Toxic Plant (Outdoor)'
          : 'Non-Toxic Plant (Outdoor)';
      break;
  }

  plantBuilder
    .setPotColor('clay')
    .withExtras(extra.map((extras) => getExtraImage(extras)));

  const plantResult = plantBuilder.build();
  return plantResult;
}

export default processData;