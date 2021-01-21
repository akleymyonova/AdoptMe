import Genders from '@/enums/Genders'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

class AnimalListView {
  constructor(params) {
    this.id = params.id;
    this.name = params.name;
    this.alreadyInShelter = dayjs(parseInt(params.gotInShelterDate)).toNow(true);
    this.age = dayjs(parseInt(params.birthDate)).toNow(true);
    this.photo = params.photo;
    this.photoId = params.photoId;
    this.wooltype = params.wooltype;
    this.compabilityWithChildren = params.compabilityWithChildren;
    this.animalType = params.animalType;
    this.gender = _getGender(params.sex);
    this.shortInfo = params.shortInfo;
    this.flex = 6;
    this.isShown = false;
  }

  setIsShown(isShown) {
    this.isShown = isShown;
  }
}

function _getGender(sex) {
  return sex === Genders.MALE ? 'Male' : 'Female';
}

function create(params) {
  return new AnimalListView(params);
}

export default {
  create
}