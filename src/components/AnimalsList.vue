<template>
  <v-card>
    <v-container fluid>
      <v-text-field
        v-model="searchText"
        label="Search"
        clearable
        append-outer-icon="place"
      ></v-text-field>
      <form method="POST" accept-charset="utf-8" action="https://www.liqpay.ua/api/3/checkout">
        <input type="hidden" name="data" value="eyJ2ZXJzaW9uIjozLCJhY3Rpb24iOiJwYXlkb25hdGUiLCJwdWJsaWNfa2V5IjoiaTQ0MTAzNTE4MjUwIiwiYW1vdW50IjoiNSIsImN1cnJlbmN5IjoiVUFIIiwiZGVzY3JpcHRpb24iOiLQn9C+0LbQtdGA0YLQstC+0LLQsNC90LjQtSIsInR5cGUiOiJkb25hdGUiLCJsYW5ndWFnZSI6ImVuIn0=" />
        <input type="hidden" name="signature" value="IsMsZvCOMGaoWr2R9HOfsu55/tA=" />
        <button style="border: none !important; display:inline-block !important;text-align: center !important;padding: 7px 20px !important;
          color: #fff !important; font-size:16px !important; font-weight: 600 !important; font-family:OpenSans, sans-serif; cursor: pointer !important; border-radius: 2px !important;
          background: rgb(122,183,43) !important;">
          <img src="https://static.liqpay.ua/buttons/logo-small.png" name="btn_text"
            style="margin-right: 7px !important; vertical-align: middle !important;"/>
          <span style="vertical-align:middle; !important">Donate 5 UAH</span>
        </button>
      </form>
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
        <v-col :cols="3">
          <v-btn>Load img to search...</v-btn>
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
        if(!this.searchText) {
          return this.shortAnimalsInfo;
        }
        const textToSearch = this.searchText.toLowerCase();
        return this.shortAnimalsInfo.filter(info => (
         (this.animalTypes.some((type) => type === info.animalType)) &&
         (this.genders.some((gender) => gender === info.gender)) &&
         (info.shortInfo.toLowerCase().includes(textToSearch) ||
         info.name.toLowerCase().includes(textToSearch)) 
        ))
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