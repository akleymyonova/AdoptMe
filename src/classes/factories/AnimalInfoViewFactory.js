import { getTimeToNow } from '@/helpers/time'

class AnimalInfoView {
  constructor(params) {
    this.id = params.id;
    this.name = params.name;
    this.breed = params.breed;
    this.animalType = params.animalType;
    this.sex = params.sex;
    this.birthDate = params.birthDate || 'We doesn`t know how old is it';
    this.alreadyInShelter = getTimeToNow(params.gotInShelterDate)
    this.wooltype = params.wooltype;
    this.compabilityWithChildren = params.compabilityWithChildren;
    this.age = getTimeToNow(params.birthDate);
    this.photo = params.photo || null;
    this.weight = params.weight || null;
    this.shortInfo = params.shortInfo;
    this.characterTraits = params.characterTraits || [];
    this.detailedInfo = params.detailedInfo;
  }
}

function create(params) {
  return new AnimalInfoView(params);
}

export default {
  create
}