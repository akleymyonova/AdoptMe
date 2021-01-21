import Factory from '@/classes/AbstractFactory'
const { AnimalListViewFactory, AnimalInfoViewFactory } = Factory

const state = {
  animals: []
}

const getters = {
  getAnimalById: state => id => {
    return state.animals.find(animal => animal.id === id);
  },
  getAnimalByPhotoId: state => photoId => {
    return state.animals.find(animal => animal.photoId === photoId)
  },
  getAllAnimals: state => () => {
    return state.animals;
  }
}

const mutations = {
  setAnimals(state, animals) {
    state.animals = animals;
  },
  setFullAnimalInfo(state, animal) {
    const animalIndex = state.animals.findIndex(an =>
      an.id === animal.id
    );
    state.animals.splice(animalIndex, 1, animal);
  }
}

const actions = {
  initAnimals({ commit }, { animals }) {
    // make mapping to views in getters
    animals = animals.map(animal => {
      console.log(animal)
      return AnimalListViewFactory.create(animal)
    });
    commit('setAnimals', animals);
  },
  initAnimalFullInfo({ commit }, { animalInfo }) {
    animalInfo = AnimalInfoViewFactory.create(animalInfo);
    commit('setFullAnimalInfo', animalInfo)
  }
}

export default {
  state,
  getters,
  mutations,
  actions,
  namespaced: true
}