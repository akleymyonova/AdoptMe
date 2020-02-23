<template>
  <v-card>
    <v-container fluid>
      <v-text-field
        v-model="searchText"
        label="Search"
        clearable
        append-outer-icon="place"
      ></v-text-field>
      <v-row>
        <v-col :cols="3">
          <v-select
            v-model="animalTypes"
            :items="animalTypesValues"
            :menu-props="{ maxHeight: '400' }"
            label="Select"
            multiple
            hint="Pick animal type"
            persistent-hint
          ></v-select>
        </v-col>
         <v-col :cols="3">
          <v-select
            v-model="genders"
            :items="genderValues"
            :menu-props="{ maxHeight: '400' }"
            label="Select"
            multiple
            hint="Pick animal gender"
            persistent-hint
          ></v-select>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col
          v-for="animal in filteredAnimalsInfo"
          :key="animal.id"
          :cols="animal.flex"
        >
         <AnimalView :animal="animal"  @onPhotoClick="onPhotoClick"/>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>

  import AnimalView from '@/components/views/AnimalView'

  export default {
    name: 'AnimalsList',
    components: {
      AnimalView
    },
    data() {
      return {
        src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
        animalTypes: [],
        genders: [],
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
      })
      .catch(err => {
        console.log(err);
      })
    },
    computed: {
      shortAnimalsInfo() {
        return this.$store.getters['Animals/getAllAnimals']();
      },
      filteredAnimalsInfo() {
        return this.shortAnimalsInfo.filter(info => (
         (this.animalTypes.some((type) => type === info.animalType)) &&
         (this.genders.some((gender) => gender === info.gender))) &&
         (info.shortInfo.includes(this.searchText) || info.name.includes(this.searchText)) 
        )
      },
      animalTypesValues() {
        return this.shortAnimalsInfo.map(info => info.animalType)
      },
      genderValues() {
        return ['Male', 'Female']
      }
    },
    methods: {
      onPhotoClick({ id }) {
        this.$router.push(`/animal/${id}`)
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>