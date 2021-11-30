<template>
  <div v-if="animal">
    <UserForm v-if="showUserForm" @confirmAdoption="confirmAdoption"/>
    <div>
      <v-row>
        <v-col cols="5">
          <v-card>
            <v-img
              :src="require(`@/assets/images/${animal.photo}`)">
            </v-img>
          </v-card>
        </v-col>
        <v-col cols="7">
          <v-card class="info-wrapper">
            <div>
              <div class="font-weight-bold display-3">
                {{$t(animal.name)}}
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
                    {{$t(animal.animalType)}}
                  </v-col>
                  <v-col cols="6">
                    {{`${$t('Breed')}: ${$t(animal.breed)}`}}
                  </v-col>
                </v-row>
              </div>
              <div class="headline">
                <v-row>
                  <v-col cols="6">
                    {{`${$t('Age')}: ${animal.age}`}}
                  </v-col>
                  <v-col cols="6">
                    {{`${$t('AlreadyInShelter')} ${animal.alreadyInShelter}`}}
                  </v-col>
                </v-row>
              </div>
              <div class="headline">
                <v-row>
                  <v-col cols="6">
                    {{`${$t('Gender')}: ${$t(gender)}`}}
                  </v-col>
                  <v-col cols="6">
                    {{`${$t('Weight')}: ${animal.weight}`}}
                  </v-col>
                </v-row>
              </div>
            </div>
             <div class="headline">
                <v-row>
                  <v-col cols="6">
                    {{`${$t('WoolType')} ${$t(animal.wooltype)}`}}
                  </v-col>
                  <v-col cols="6">
                    {{`${$t('ChildrenCompability')} ${$t(animal.compabilityWithChildren)}`}}
                  </v-col>
                </v-row>
              </div>
            <div class="headline">
              {{ animal.detailedInfo }}
            </div>
          </v-card>
          <div class="button-wrapper">
              <v-btn x-large color="teal" dark @click="adopt">{{ $t('AdoptButton') }}</v-btn>
            </div>
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
        colors: ['primary', 'secondary', 'green', 'pink', 'orange'],
        animal: null
      }
    },
    async mounted() {
      this.id = this.$route.params.id;
      try {
        const response = await this.$http.get(`${this.$store.state.AppContext.serverUrl}/animal/${this.id}`);
        const animalInfo = response.data;
        this.$store.dispatch('Animals/initAnimalFullInfo', { animalInfo });
        this.animal = this.$store.getters['Animals/getAnimalById'](this.id);
      } catch (err) {
        console.log('Error on mounting AnimalInfo:', err);
      }      
    },
    methods: {
      adopt() {
        this.showUserForm = true;
      },
      async confirmAdoption({ info }) {
        this.showUserForm = false;
        info.animalName = this.animal.name;
        const data = JSON.stringify(info);
        try {
          await this.$http.post(`${this.$store.state.AppContext.serverUrl}/userInfo/`, data, {
            headers: {
              'Content-Type': 'application/json',
            }
          })
        } catch (err) {
          console.log('Error while confirming adoption')
        }
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
  .info-wrapper {
    padding: 20px;
  }

  .button-wrapper {
    margin: 20px;
    text-align: center;
  }
</style>