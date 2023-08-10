class PlantInfoBuilder {
  constructor() {
    this.buildInfo = {
      name: '',
      soil: '',
      potMaterial: '',
      potStyle: '',
      potColor: '',
      extras: [],
      plantImage: '',
    };
  }

  withName(name) {
    this.buildInfo.name = name;
    return this;
  }

  withSoil(soil) {
    this.buildInfo.soil = soil;
    return this;
  }

  setPotMaterial(material) {
    this.buildInfo.potMaterial = material;
    return this;
  }

  setPotStyle(style) {
    this.buildInfo.potStyle = style;
    return this;
  }

  setPotColor(color) {
    this.buildInfo.potColor = color;
    return this;
  }

  withExtras(extras) {
    this.buildInfo.extras = extras;
    return this;
  }

  PlantImage(plantImage) {
    this.buildInfo.plantImage = plantImage;
    return this;
  }

  build() {
    return this.buildInfo;
  }
}

export default PlantInfoBuilder;
