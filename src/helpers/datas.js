function getPlantName(plantName) {
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

function getPlantImage(plantName) {
  switch (plantName) {
    case 'Low Light Plants':
      return 'plant_sansevieria';
    case 'Medium Light Plants':
      return 'plant_aglaonema';
    case 'Outdoor Plants':
      return 'plant_aloe';
    case 'Non-Toxic Plant (Low Light)':
      return 'plant_fern';
    case 'Toxic Plant (Low Light)':
      return 'plant_peace_lily';
    case 'Non-Toxic Plant (Medium Light)':
      return 'plant_monstera';
    case 'Toxic Plant (Medium Light)':
      return 'plant_peace_lily';
    case 'Non-Toxic Plant (Outdoor)':
      return 'plant_cactus';
    case 'Toxic Plant (Outdoor)':
      return 'plant_aloe';
    default:
      return '';
  }
}

function getPotImage(material, style) {
  let potName = `simple_${material}_pot`;

  if (style === 'decorated') {
    potName += '_decorated';
  } else if (style === 'lotsDecoration') {
    potName = `painted_${material}_pot_decorated`;
  }

  return potName;
}

function getExtraImage(extra) {
  switch (extra) {
    case 'moss-pole':
      return 'moss_pole';
    case 'pebbles':
      return 'pebbles';
    case 'mini-plants':
      return 'mini_plants';
  }
}

export { getPlantName, getPlantImage, getPotImage, getExtraImage };
