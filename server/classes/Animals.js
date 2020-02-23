const now = require('lodash/now');

class FullAnimalInfo {
  constructor(params) {
    this.id = params._id;
    this.name = params.name;
    this.breed = params.breed || null;
    this.animalType = params.animalType;
    this.sex = params.sex;
    this.birthDate = params.birthDate || null;
    this.photo = params.photo || null;
    this.weight = params.weight || null;
    this.gotInShelterDate = params.gotInShelterDate || now();
    this.shortInfo = params.shortInfo || '';
    this.characterTraits = params.characterTraits || [];
  }
}

class PartialAnimalInfo {
  constructor(params) {
    this.id = params._id;
    this.animalType = params.animalType;
    this.birthDate = params.birthDate;
    this.name = params.name;
    this.gotInShelterDate = params.gotInShelterDate;
    this.photo = params.photo || null;
    this.sex = params.sex;
    this.shortInfo = params.shortInfo;
  }
}

module.exports = {
  FullAnimalInfo,
  PartialAnimalInfo
}