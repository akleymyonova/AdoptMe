<template>
  <div v-if="animal">
    <UserForm v-if="showUserForm" @confirmAdoption="confirmAdoption"/>
    <div>
      <v-row>
        <v-col cols="5">
          <v-card>
            <v-img
              :src="animal.photo">
            </v-img>
          </v-card>
        </v-col>
        <v-col cols="7">
          <v-card>
            <div>
              <div class="font-weight-bold display-3">
                {{animal.name}}
              </div>
              <div>
                <span class="text-center" v-for="(trait, index) in animal.characterTraits" :key="index">
                  <v-chip :color="chipsColors[index]">
                    {{trait}}
                  </v-chip>
                </span>
              </div>
              <div class="display-1">
                <v-row>
                  <v-col cols="6">
                    {{animal.animalType}}
                  </v-col>
                  <v-col cols="6">
                    {{'Breed: ' + animal.breed}}
                  </v-col>
                </v-row>
              </div>
              <div class="headline">
                <v-row>
                  <v-col cols="6">
                    {{'Age: ' + animal.age}}
                  </v-col>
                  <v-col cols="6">
                    {{'Already in shelter: ' + animal.alreadyInShelter}}
                  </v-col>
                </v-row>
              </div>
              <div class="headline">
                <v-row>
                  <v-col cols="6">
                    {{'Gender: ' + gender}}
                  </v-col>
                  <v-col cols="6">
                    {{'Weight: ' + animal.weight}}
                  </v-col>
                </v-row>
              </div>
            </div>
            <div class="headline">
              {{animal.shortInfo + animal.shortInfo + animal.shortInfo}}
            </div>
            <div class="button-wrapper">
              <v-btn x-large color="teal" dark @click="adopt">I want to adopt you!</v-btn>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
  import Utils from '@/../shared/utils/utils'
  import UserForm from '@/components/views/UserForm'
  import Genders from '@/enums/Genders'

  export default {
    name: 'MainPage',
    components: {
      UserForm
    },
    data() {
      return {
        id: '',
        showUserForm: false,
        src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
        colors: ['primary', 'secondary', 'green', 'pink', 'orange'],
        animal: null
      }
    },
    mounted() {
      this.id = this.$route.params.id;
      this.$http.get(`http://localhost:3000/animal/${this.id}`).then(response => {
        const animalInfo = response.data;
        this.$store.dispatch('Animals/initAnimalFullInfo', { animalInfo });
        this.animal = this.$store.getters['Animals/getAnimalById'](this.id);
      })
      
    },
    methods: {
      adopt() {
        this.showUserForm = true;
      },
      confirmAdoption() {
        this.showUserForm = false;
      }
    },
    computed: {
      chipsColors() {
        return Utils.shuffle(this.colors)
      },
      gender() {
        return this.animal.sex === Genders.MALE ?
          'Male' :
          'Female'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .button-wrapper {
    text-align: center;
  }
</style>