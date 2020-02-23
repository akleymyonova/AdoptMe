import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

class AnimalInfoView {
  constructor(params) {
    this.id = params.id;
    this.name = params.name;
    this.breed = params.breed;
    this.animalType = params.animalType;
    this.sex = params.sex;
    this.birthDate = params.birthDate || 'We doesn`t know how old is it';
    this.alreadyInShelter = dayjs(parseInt(params.gotInShelterDate)).toNow(true);
    this.age = dayjs(parseInt(params.birthDate)).toNow(true);
    this.photo = params.photo || null;
    this.weight = params.weight || null;
    this.shortInfo = params.shortInfo;
    this.characterTraits = params.characterTraits || [];
  }
}

function create(params) {
  return new AnimalInfoView(params);
}

export default {
  create
}