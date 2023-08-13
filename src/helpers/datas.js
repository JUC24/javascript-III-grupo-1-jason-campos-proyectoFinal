function plantNames(plantName) {
  switch (plantName) {
    case 'Low Light Plants':
      return 'Sansevieria';
    case 'Medium Light Plants':
      return 'Aglaonema';
    case 'Outdoor Plants':
      return 'Aloe Vera';
    case 'on-Toxic Plant (Low Light)':
      return 'Boston Fern';
    case 'Toxic Plant (Low Light)':
      return 'Peace Lily';
    case 'Non-Toxic Plant (Medium Light)':
      return 'Monstera';
    case 'Toxic Plant (Medium Light)':
      return 'Peace Lily';
    case 'Non-Toxic Plant (Outdoor)':
      return 'Cactus';
    case 'Toxic Plant (Outdoor)':
      return 'Aloe Vera';
  }
}

function plantImage(plantName) {
  switch (plantName) {
    case 'Low Light Plants':
      return 'plant-sansevieria';
    case 'Medium Light Plants':
      return 'plant-aglaonema';
    case 'Outdoor Plants':
      return 'plant-aloe';
    case 'Non-Toxic Plant (Low Light)':
      return 'plant-fern';
    case 'Toxic Plant (Low Light)':
      return 'plant-peace-lily';
    case 'Non-Toxic Plant (Medium Light)':
      return 'plant-monstera';
    case 'Toxic Plant (Medium Light)':
      return 'plant-peace_lily';
    case 'Non-Toxic Plant (Outdoor)':
      return 'plant-cactus';
    case 'Toxic Plant (Outdoor)':
      return 'plant-aloe';
    default:
      return '';
  }
}

function potImage(material, style) {
  let potName = `simple-${material}-pot`;

  if (style === 'decorated') {
    potName += '-decorated';
  } else if (style === 'lotsDecoration') {
    potName = `painted-${material}-pot-decorated`;
  }

  return potName;
}

function extraImage(extra) {
  switch (extra) {
    case 'moss-pole':
      return 'moss-pole';
    case 'pebbles':
      return 'pebbles';
    case 'mini-plants':
      return 'mini-plants';
  }
}

function soilImage(soilType) {
  switch (soilType) {
    case 'fertilized':
      return 'soil-fertilized';
    case 'drainage':
      return 'soil-drainage';
    case 'composted':
      return 'soil-composted';
    default:
      return '';
  }
}

export { plantNames, plantImage, potImage, extraImage, soilImage };
