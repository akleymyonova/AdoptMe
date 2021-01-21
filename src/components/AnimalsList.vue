<template>
  <v-card>
    <v-container fluid>
      <v-row>
        <v-col :cols="6">
          <v-text-field
            v-model="searchText"
            :label="$t('Search')"
            clearable
            append-outer-icon="place"
          ></v-text-field>
        </v-col>
        <v-col :cols="6">
          <ImageSearcher @imageSearcherEvent="searcherEventHandler"/>
        </v-col>
      </v-row>
      <v-row>
        <v-col :cols="3">
          <v-select
            v-model="animalTypes"
            :items="animalTypesValues"
            :menu-props="{ maxHeight: '400' }"
            multiple
            :hint="$t('PickType')"
            persistent-hint
          ></v-select>
        </v-col>
         <v-col :cols="3">
          <v-select
            v-model="genders"
            :items="genderValues"
            :menu-props="{ maxHeight: '400' }"
            multiple
            :hint="$t('PickGender')"
            persistent-hint
          ></v-select>
        </v-col>
        <v-col :cols="3">
          <v-select
            v-model="wooltypes"
            :items="woolTypeValues"
            :menu-props="{ maxHeight: '400' }"
            multiple
            :hint="$t('PickWooltype')"
            persistent-hint
          ></v-select>
        </v-col>
        <v-col :cols="3">
          <v-select
            v-model="childrenCompabilities"
            :items="childrenCompabilityValues"
            :menu-props="{ maxHeight: '400' }"
            multiple
            :hint="$t('PickCompability')"
            persistent-hint
          ></v-select>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col
          class="animal-view"
          v-for="animal in filteredAnimalsInfo"
          :key="animal.id"
          :cols="animal.flex"
        >
         <AnimalView :animal="animal"  @onPhotoClick="onPhotoClick"/>
        </v-col>
      </v-row>
    </v-container>
    <AppMenu :activatorSelector="`.${MENU_CLASS}`"/>
  </v-card>
</template>

<script>
  import ImageSearcher from '@/components/views/ImageSearcher';
  import AnimalView from '@/components/views/AnimalView';
  import AppMenu from '@/components/views/AppMenu';

  const MENU_CLASS = 'app-menu';

  export default {
    name: 'AnimalsList',
    components: {
      AnimalView,
      ImageSearcher,
      AppMenu
    },
    data() {
      return {
        animalTypes: [],
        MENU_CLASS,
        filteredAnimalsInfo: [],
        genders: [],
        wooltypes: [],
        childrenCompabilities: [],
        searchText: ''
      }
    },
    mounted() {
      this.$http.get('http://localhost:3000/animals/').then(response => {
        if(!response.data) {
          console.log('get error while getting animals')
          return
        }
        const animals = response.data;
        this.$store.dispatch('Animals/initAnimals', { animals })
        this.animalTypes = [...new Set(this.animalTypesValues)];
        this.genders = this.genderValues;
        this.wooltypes = this.woolTypeValues;
        this.childrenCompabilities = this.childrenCompabilityValues;
        this.filteredAnimalsInfo = this.shortAnimalsInfo;
      })
      .catch(err => {
        console.log(err);
      })
    },
    computed: {
      shortAnimalsInfo() {
        return this.$store.getters['Animals/getAllAnimals']();
      },
      // filteredAnimalsInfo() {
      //   // if(!this.searchText) {
      //   //   return this.shortAnimalsInfo;
      //   // }
      //   // const textToSearch = this.searchText.toLowerCase();
      //   // return this.shortAnimalsInfo.filter(info => (
      //   //  (this.animalTypes.some((type) => type === info.animalType)) &&
      //   //  (this.genders.some((gender) => gender === info.gender)) &&
      //   //  (info.shortInfo.toLowerCase().includes(textToSearch) ||
      //   //  info.name.toLowerCase().includes(textToSearch)) 
      //   // ))
      // },
      animalTypesValues() {
        const types = this.shortAnimalsInfo.map(info => info.animalType)
        return Array.from(new Set(types)).map(type => (
          {
            text: this.$t(type),
            value: type
          }
        ))
      },
      woolTypeValues() {
        const woolTypes = ['shorthair', 'longhair', 'feathers'];
        return woolTypes.map(type => (
          {
            text: this.$t(type),
            value: type
          }
        ))
      },
      childrenCompabilityValues() {
        const compabilities = ['complete', 'partial', 'none'];
        return compabilities.map(compability => (
          {
            text: this.$t(compability),
            value: compability
          }
        ))
      },
      genderValues() {
        const genders = ['Male', 'Female'];
        return genders.map(gender => (
          {
            text: this.$t(gender),
            value: gender
          }))
      }
    },
    methods: {
      onPhotoClick({ id }) {
        this.$router.push(`/animal/${id}`)
      },
      searcherEventHandler({ mostSimilar }) {
        if (!mostSimilar) {
          this.filteredAnimalsInfo = this.shortAnimalsInfo;
          return;
        }
        const animalsInfo = mostSimilar
          .map(animal => {
            return this.$store.getters['Animals/getAnimalByPhotoId'](animal.displayName)
          })
          .filter(animal => !!animal);
        this.filteredAnimalsInfo = animalsInfo;
      }
    }
  }
</script>

<style lang="scss" scoped>
.animal-view {
  padding: 20px;
}
</style>